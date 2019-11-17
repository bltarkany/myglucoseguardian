const express = require('express');
const { join } = require("path");
const morgan = require("morgan");
const app = express();

const mongoose = require("mongoose");
const routes = require("./routes");

app.use(morgan("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(join(__dirname, 'client/build')));

// Add routes, both API and view
app.use(routes);

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log('App is listening on port ' + PORT);
// app.listen(port, () => console.log(`Listening on port ${port}`));
