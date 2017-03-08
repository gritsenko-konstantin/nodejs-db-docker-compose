'use strict';

const ENV = process.env.NODE_ENV;

module.exports = {
    env: ENV,
    port: 8001,
    db: {
        dialect: 'mysql',
        timezone: '+00:00',
        username: 'root',
        password: '',
        database: 'api',
        host: 'mysql-db',
        port: 3306,
        logging: false,
    },
};
