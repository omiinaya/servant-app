const Sequelize = require("sequelize")
const db = require("../database/db")

var Users = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false
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