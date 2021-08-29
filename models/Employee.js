const Sequelize = require("sequelize")
const db = require("../database/db")

var Employees = db.sequelize.define(
    'employee',
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

Employees.sync(/*{force: true}*/)

module.exports = Employees