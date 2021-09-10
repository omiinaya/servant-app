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
        },
        reviwer_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        content: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        rating: {
            type: Sequelize.DECIMAL,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

Reviews.sync(/*{force: true}*/)

module.exports = Reviews