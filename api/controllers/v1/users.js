'use strict';

const dbParams  = require('config').get('db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbParams.database, dbParams.username, dbParams.password, dbParams);

const Users = sequelize.import('../../models/User.m.js');

class UsersController {
    /**
     * @api {get} /api/v1/users Get users list
     * @apiGroup Users
     * @apiVersion 1.0.0
     *
     * @apiSuccess {array} users array
     * @apiSuccess {int} id user id
     * @apiSuccess {string} username user's username
     * @apiSuccess {string="guest", "user", "admin"} type user type
     * @apiSuccess {boolean} is_active is user active
     * @apiSuccess {Date} created_at is user created at date
     * @apiSuccess {Date} updated_at is user updated at date
     */
    async getAll(req, res, next) {
        const users = await Users.findAll();
        return res.json(users);
    }

    async create(req, res, next) {
        const username = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
        return res.json(await Users.create({username: username, email: `${username}@example.com`, type: 'guest'}));
    }
}

module.exports = new UsersController();