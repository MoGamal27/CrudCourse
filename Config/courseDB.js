const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'courses',
  password: '1596',
});

module.exports = pool.promise();