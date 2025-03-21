'use strict';
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require('dotenv').config();
// const cors = require('cors');
// const path = require('path');
// const csrf = require('csurf');
const axios = require('axios');
// const helmet = require('helmet');
// const winston = require('winston');
const express = require('express');
// const bodyParser = require('body-parser');
// const { port } = require('../config/config')
// const port =  3000;

const app = express();
// app.use(cors());
// app.use(helmet());

// app.use(bodyParser.json());
// app.disable('x-powered-by');
// app.use(helmet.frameguard({ action: 'deny' }));

// const csrfProtection = csrf({ cookie: true });
// app.use(csrfProtection);

// app.use(express.json({ limit: '10kb' })); 
// app.use(express.urlencoded({ limit: '10kb', extended: true }));

// app.use(express.static(path.join('../../../dist/', 'public'))); // Serve frontend files
// app.get('*', (req, res) => {
//   res.sendFile(path.join('../../../dist/', 'client/build', 'index.html'));
// });
// app.use(
//   helmet.contentSecurityPolicy({
//       directives: {
//           defaultSrc: ["'self'"],
//           scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
//           styleSrc: ["'self'", "'unsafe-inline'"],
//           imgSrc: ["'self'", "data:"],
//           connectSrc: ["'self'"],
//           fontSrc: ["'self'", "data:"],
//           objectSrc: ["'none'"],
//           upgradeInsecureRequests: [],
//       },
//   })
// );

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });
/**
 * Prevent access to cookie via JavaScript
 * Cookie is only sent over HTTPS
 * CSRF protection
 */
// app.use((req, res, next) => {
//   res.cookie('sessionID', 'value', {
//       httpOnly: true,   
//       secure: true,    
//       sameSite: 'Strict',
//   });
//   next();  
// });


// const logger = winston.createLogger({
//     level: 'info',
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({ filename: 'app.log' }),
//     ],
// });
// logger.info('This is an info log');

const SERVER_HEALTH = async (req, res) => {
    let url = req.body;
    try {
             axios.get(url[0], { timeout: 5000 }).then(response => {
          const resData = response.data;
          console.log(resData);
         res.json(JSON.stringify(resData));
        }).catch(error => {
          console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
        });
      } catch (error) {
        console.error('Error fetching build details from Jenkins', error);
        res.status(500).send('Internal Server Error');
      }

};
module.exports = {SERVER_HEALTH};
// // Start Server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });