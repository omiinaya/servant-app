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
        }
    },
    {
        timestamps: false
    }
)

Requests.sync(/*{force: true}*/)

module.exports = Requests