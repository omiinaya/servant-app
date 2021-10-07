const Sequelize = require("sequelize")
const db = require("../database/db")

var Requests = db.sequelize.define(
    'request',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        author_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        start_date: {
            type: Sequelize.STRING,
            allowNull: false
        },
        start_date: {
            type: Sequelize.STRING,
            allowNull: false
        },
        expired: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        timestamps: false
    }
)

Requests.sync(/*{force: true}*/)

module.exports = Requests