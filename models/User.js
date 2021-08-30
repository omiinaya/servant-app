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
        first_name: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        last_name: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

Users.sync(/*{force: true}*/)

module.exports = Users