'use strict';

/**
 * This file for sequelize migrations only
 * 
 * @type {{}}
 */
module.exports = {
    [process.env.NODE_ENV || 'development']: require('config').get('db')
};