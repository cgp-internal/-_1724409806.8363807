const db = require('./connection');

const createTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS flight_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    polygon TEXT NOT NULL,
    request_data TEXT NOT NULL
  );`;
  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Flight requests table created or already exists.');
    }
  });
};

const insertFlightRequest = (flightRequest) => {
  const sql = `INSERT INTO flight_requests (polygon, request_data) VALUES (?, ?)`;
  db.run(sql, flightRequest.polygon, flightRequest.requestData, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Flight request inserted into the database.');
    }
  });
};

const getFlightRequestsInPolygon = (polygon) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM flight_requests WHERE polygon = ?`;
    db.get(sql, polygon, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

createTable();

module.exports = {
  getFlightRequestsInPolygon,
  insertFlightRequest,
};