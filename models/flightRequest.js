class FlightRequest {
  constructor(requestData, polygonBoundary) {
    this.requestData = requestData;
    this.polygonBoundary = polygonBoundary;
  }

  getRequestId() {
    return this.requestData.requestId;
  }

  getRequestType() {
    return this.requestData.requestType;
  }

  getPolygonBoundary() {
    return this.polygonBoundary;
  }

  setPolygonBoundary(polygonBoundary) {
    this.polygonBoundary = polygonBoundary;
  }

  getRequestData() {
    return this.requestData;
  }

  setRequestData(requestData) {
    this.requestData = requestData;
  }
}

module.exports = { FlightRequest };