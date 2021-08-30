const Sequelize = require("sequelize")
const db = require("../database/db")

var Reviews = db.sequelize.define(
    'review',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        }
    },
    {
        timestamps: false
    }
)

Reviews.sync(/*{force: true}*/)

module.exports = Reviews