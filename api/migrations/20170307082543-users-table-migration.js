'use strict';

module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('users', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type: {
                type: DataTypes.ENUM,
                values: ['guest', 'user', 'admin'],
                defaultValue: 'guest',
                allowNull: false
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
        });
        await queryInterface.addIndex('users', ['email'], {indexName: 'idx-users-email', indicesType: 'UNIQUE'});
        await queryInterface.addIndex('users', ['username'], {indexName: 'idx-users-username', indicesType: 'UNIQUE'});
        await queryInterface.addIndex('users', ['is_active'], {indexName: 'idx-users-is_active'});
        await queryInterface.addIndex('users', ['type'], {indexName: 'idx-users-type'});
    },

    down: async function (queryInterface) {
        return await queryInterface.dropTable('users');
    }
};
