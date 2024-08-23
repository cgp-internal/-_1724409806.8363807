Flight Request Application
==========================

Overview
--------

This is a Node.js application for processing flight requests based on polygon boundaries. The application uses Express.js as the web framework and SQLite as the database.

How to Run
-----------

1. Install Node.js and npm (the package manager for Node.js) if you haven't already.
2. Clone the repository and navigate to the project directory.
3. Run `npm install` to install the dependencies specified in `package.json`.
4. Run `npm start` to start the server.
5. Open a web browser and navigate to `http://localhost:3000` to access the application.

Project Structure
-----------------

The project consists of the following components:

* `app.js`: Main entry point for the application, sets up the Express server and defines routes.
* `routes/api.js`: Defines routes for processing flight requests based on polygon boundaries.
* `controllers/flightRequest.js`: Handles flight request processing, including validation, calculation, and response formatting.
* `services/flightService.js`: Contains functions for processing flight requests, including polygon boundary calculations and request validation.
* `models/flightRequest.js`: Defines the FlightRequest model, including polygon boundary coordinates and request data.
* `db/flightRequests.js`: Handles database operations for storing and retrieving flight requests.
* `db/connection.js`: Establishes a connection to the SQLite database.
* `public/index.html`: Main HTML page for the web application, including the Leaflet.js map and user interface.
* `public/js/app.js`: JavaScript file for the web application, handling user interactions and API requests.
* `public/leaflet.js`: Leaflet.js library for interactive mapping.

Scripts
-------

* `run.sh`: Bash script to install Node, initialize the project, install Express, and start the server.

Note
----

This README assumes that you have a basic understanding of Node.js, Express.js, and SQLite. If you're new to these technologies, you may want to review the official documentation and tutorials before running the application.