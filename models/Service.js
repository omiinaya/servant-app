const Sequelize = require("sequelize")
const db = require("../database/db")

var Services = db.sequelize.define(
    'service',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

Services.sync(/*{force: true}*/)

module.exports = Services