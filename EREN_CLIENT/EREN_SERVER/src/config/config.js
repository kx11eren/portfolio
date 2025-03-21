require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    // jwtSecret: process.env.JWT_SECRET,
    // dbConnectionString: process.env.DB_CONNECTION_STRING,
};