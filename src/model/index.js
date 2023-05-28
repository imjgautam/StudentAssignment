
const Sequelize = require('sequelize');

let dbDetails =
  'postgres://' +
  'postgres' +
  ':' +
  '12345' +
  '@' +
  'localhost' +
  ':' +
  5432 +
  '/' +
  'studentapi';

const sequelize = new Sequelize(dbDetails, {
  dialect: 'postgres',
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.students = require('./student.model')(sequelize, Sequelize);

module.exports = db;
