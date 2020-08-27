require('dotenv').config({
  path: __dirname+'/../../.env'
});
module.exports = {
  "development": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_TABLE,
    "host": process.env.DATABASE_HOST,
    "dialect": process.env.DATABASE_DIALECT
  },
  "test": {
    "username": process.env.TEST_DATABASE_USER,
    "password": process.env.TEST_DATABASE_PASSWORD,
    "database": process.env.TEST_DATABASE_TABLE,
    "host": process.env.TEST_DATABASE_HOST,
    "dialect": process.env.TEST_DATABASE_DIALECT
  },
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_TABLE,
    "host": process.env.DATABASE_HOST,
    "dialect": process.env.DATABASE_DIALECT
  }
};