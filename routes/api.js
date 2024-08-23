const express = require('express');
const apiRouter = express.Router();
const { processFlightRequestController } = require('./controllers/flightRequest');
const { FlightRequest } = require('./models/flightRequest');

apiRouter.post('/flightrequests', processFlightRequestController);

module.exports = { apiRouter };