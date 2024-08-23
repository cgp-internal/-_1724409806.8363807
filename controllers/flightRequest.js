const { processFlightRequest } = require('../services/flightService');

const processFlightRequestController = async (req, res) => {
  try {
    const flightRequest = req.body;
    const result = await processFlightRequest(flightRequest);
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ error: 'Invalid flight request data.' });
    }
  } catch (err) {
    console.error('Error processing flight request:', err);
    res.status(500).json({ error: 'Error processing flight request.' });
  }
};

module.exports = {
  processFlightRequestController,
};