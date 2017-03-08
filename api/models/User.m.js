'use strict';

const USER_TYPES = Object.freeze({
    guest: 'guest',
    user: 'user',
    admin: 'admin',
});

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {name: 'idx-users-username', msg: 'Account with this username already exists.'}
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {name: 'idx-users-email', msg: 'Account with this email already exists.'}
        },
        type: {
            type: DataTypes.ENUM,
            values: Object.keys(USER_TYPES),
            defaultValue: USER_TYPES.guest,
            allowNull: false,
            validate: {
                isIn: [Object.keys(USER_TYPES)]
            }
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'users',
        freezeTableName: true,
        timestamps: false,
        scopes: {
            active: {where: {is_active: true}},
            isUser: {where: {type: USER_TYPES.user}},
            isAdmin: {where: {type: USER_TYPES.admin}},
        },
        instanceMethods: {
            isGuest: function () {
                return this.type === USER_TYPES.guest;
            },
            isUser: function () {
                return this.type === USER_TYPES.user;
            },
            isAdmin: function () {
                return this.type === USER_TYPES.admin;
            }
        }
    });

    user.USER_TYPES = USER_TYPES;

    return user;
};
