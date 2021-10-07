const Sequelize = require("sequelize")
const db = require("../database/db")

var Requests = db.sequelize.define(
    'request',
    {
        //unique id of the request
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        //unique id of the author
        author_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        //title of the request
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //description of the request
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //array containing the lattite and longitude of the area
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //date in which the request was created. not to be confused with start_date.
        creation_date: {
            type: Sequelize.STRING,
            allowNull: true
        },
        //date in which the request needs to be carried out, if you need a date in specific.
        start_date: {
            type: Sequelize.STRING,
            allowNull: true
        },
        //date in which the job will expire if it's no longer required.
        end_date: {
            type: Sequelize.STRING,
            allowNull: true
        },
        //whether the request has expired or not. could be due to completion or out of time.
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