const Sequelize     = require("sequelize");
const DB_HOST       = process.env.DB_HOST
const DB_DATABASE   = process.env.DB_DATABASE
const DB_USERNAME   = process.env.DB_USERNAME
const DB_PASSWORD   = process.env.DB_PASSWORD
const DB_DIALECT    = process.env.DB_DIALECT
const DB_ALIASES    = process.env.DB_ALIASES
const DB_POOLMAX    = parseInt(process.env.DB_POOLMAX)
const DB_POOLMIN    = parseInt(process.env.DB_POOLMIN)
const DB_ACQUIRE    = parseInt(process.env.DB_ACQUIRE)
const DB_IDLE       = parseInt(process.env.DB_IDLE)
const db            = {}

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host:               DB_HOST,
    dialect:            DB_DIALECT,
    operatorAliases:    DB_ALIASES,
    
    pool: {
        max:            DB_POOLMAX,   
        min:            DB_POOLMIN,
        acquire:        DB_ACQUIRE,
        idle:           DB_IDLE
    }
}) 

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db