var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
var path = require("path");
var mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var mongodb_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooksDB";
var apiRoutes = require("./routes/apiRoutes");
apiRoutes(app);

mongoose.connect(mongodb_URI, {useNewUrlParser: true});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
    // let url = path.join(__dirname, '../client/build/index.html');
    // if (!url.startsWith('/')) // since we're on local windows
    //     url = url.substring(1);
    // res.sendFile(url);
});

app.listen(PORT, function () {
    console.log("App is listening on: http://localhost:" + PORT)
})