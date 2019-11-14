const express = require('express');
const { join } = require("path");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

// Serve the static files from the React app
app.use(express.static(join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log('App is listening on port ' + PORT);
// app.listen(port, () => console.log(`Listening on port ${port}`));
