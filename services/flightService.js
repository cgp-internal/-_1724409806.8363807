const { getFlightRequestsInPolygon } = require('./db/flightRequests');

const processFlightRequest = async (flightRequest) => {
  try {
    const polygon = flightRequest.polygon;
    const request_data = flightRequest.requestData;

    const existingRequests = await getFlightRequestsInPolygon(polygon);
    if (existingRequests) {
      console.log('Flight request already exists in the database.');
      return existingRequests;
    }

    const validatedRequest = validateRequest(request_data);
    if (!validatedRequest) {
      console.error('Invalid flight request data.');
      return null;
    }

    const calculatedRequest = calculateRequest(request_data);
    if (!calculatedRequest) {
      console.error('Error calculating flight request data.');
      return null;
    }

    insertFlightRequest(flightRequest);
    console.log('Flight request processed and inserted into the database.');
    return calculatedRequest;
  } catch (err) {
    console.error('Error processing flight request:', err);
    return null;
  }
};

const validateRequest = (request_data) => {
  // Implement request data validation logic here
  // For demonstration purposes, assume valid data
  return request_data;
};

const calculateRequest = (request_data) => {
  // Implement request data calculation logic here
  // For demonstration purposes, assume calculated data
  return request_data;
};

module.exports = {
  processFlightRequest,
};