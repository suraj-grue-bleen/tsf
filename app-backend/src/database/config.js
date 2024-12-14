const dotenv = require('dotenv');
let _ENV = dotenv.config().parsed;

    module.exports = {
        development: {
            dialect: _ENV['DB_DIALECT'],
            host: _ENV['DB_HOST'],
            port: _ENV['DB_PORT'],
            username: _ENV['DB_USER'],
            password: _ENV['DB_PASSWORD'],
            database: _ENV['DB_NAME'],
        },
    };
