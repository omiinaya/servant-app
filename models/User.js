const Sequelize = require("sequelize")
const db = require("../database/db")

var Users = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        firstname: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        birthdate: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        username: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

Users.sync({force: true})

module.exports = Users