'use strict';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const csrf = require('csurf');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config/config')
const ServerRoutes = require('./routes/ServerRoutes')
const errorMiddleware = require('./middlewares/errorMiddleware')

const app = express();
app.use(cors({
    origin: /http:\/\/localhost:\d{4}/, 
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization', 
  }));
app.use(helmet());

app.use(bodyParser.json());
app.disable('x-powered-by');
// app.use(helmet.frameguard({ action: 'deny' }));

// const csrfProtection = csrf({
//     cookie: {
//         httpOnly: true,
//         secure: true, // set to true in production (requires HTTPS)
//         sameSite: 'Strict',  // Make sure the cookie is sent only to the same site
//     },
// });
// app.use(csrfProtection);

app.use(express.json({ limit: '10kb' })); 
app.use(express.urlencoded({ limit: '10kb', extended: true }));

app.use((req, res, next) => {
    res.cookie('sessionID', 'value', {
        httpOnly: true,   
        secure: true,    
        sameSite: 'Strict',
    });
    next();  
  });

app.use(
  helmet.contentSecurityPolicy({
      directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "'sha256-xyz'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", "data:"],
          connectSrc: ["'self'"],
          fontSrc: ["'self'", "data:"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
      },
  }),
  helmet.frameguard({ action: 'deny' })
);
app.use(express.static(path.join(__dirname, './../../dist'),{
    maxAge: '30d', 
    etag: false,
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../../dist', 'index.html'));
});

// Routes
app.use('/api/Server', ServerRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});