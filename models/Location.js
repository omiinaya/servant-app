const Sequelize = require("sequelize")
const db = require("../database/db")

var Locations = db.sequelize.define(
    'location',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        label: {
            type: Sequelize.STRING(255),
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

Locations.sync(/*{force: true}*/)

module.exports = Locations