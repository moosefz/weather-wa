/* 
    Created by: Mustafa Fawaz, 6/6/2020
    App was created to practice with APIs, with interest in weather.
*/

// SETUP
const express   = require("express"),
      dotenv    = require("dotenv"),
      request   = require("request");

const app = express();

app.use(express.static(__dirname + "/public")); // css/js stylesheets
dotenv.config({ path: "./config/config.env" }) // env var
app.set("view engine", "ejs"); // ejs

// INDEX ROUTE
app.get("/", (req, res) => {
    res.render("index");
})

// API REQUEST BACK TO INDEX
app.get("/result", (req, res) => {
    
    let location = req.query.location;
    let url = "http://api.weatherbit.io/v2.0/forecast/daily?city=" + location + "&days=6&key=" + process.env.WBIO_API_KEY; 

    // api request to WeatherBit
    request(url, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            let obj = JSON.parse(body);
            res.render("index", {weather: obj});
        } else {
            console.log(error);
            res.redirect("/");
        }
    })
})

// LISTENER
app.listen(process.env.PORT || 3000, () => {
    console.log("WeatherApp now running on port 3000");
})