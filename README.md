# weather-wa
Weather-WebApp using Weatherbit API

## Getting Started
Ensure that you have a Node.js development environment installed. Download or clone this repository (weather-wa) to begin. You must install the following packages/modules for full functionality:

* express
* ejs
* dotenv
* request

These can all be downloaded in your node environment if NPM has been installed and configured using the following:

```
npm i express dotenv request ejs --save
```

Once setup, execute the server using:

```
node server.js
```

Listening is currently setup for the process.env OR a local host of port 3000 (can be changed in the app.listen() route). Console will notify once server is running. 

## Functionality
Input location of requested weather. Currently accepts all states using CITYNAME, STATECODE. For Canadian cities, CITYNAME, CAN. Weatherbit API provides all weather data and is formatted using EJS. Currently not formatted for mobile. This requires additional work and is an open issue.

## Built With
* Node.js 
* Express.js
* Weatherbit API
* Bootstrap v4.4
