const dbConfig = require('../config/database');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

//creating DB
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Book = require('../models/Book')(sequelize, Sequelize);
db.Author = require('../models/Author')(sequelize, Sequelize);

//setting relationships
db.Author.hasMany(db.Book, { foreignKey: 'authorId'});
db.Book.belongsTo(db.Author, {
    foreignKey: 'authorId',
    constraints: false
});

module.exports = db;