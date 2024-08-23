const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('flight_requests.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;