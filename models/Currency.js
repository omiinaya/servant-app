const Sequelize = require("sequelize")
const db = require("../database/db")

var Currencies = db.sequelize.define(
    'currency',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        symbol: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        country_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

Currencies.sync(/*{force: true}*/)

module.exports = Currencies