const express = require('express');

const Progress = require('./models/ProgressModel');
const progressRoute = require("./routes/progressRoutes");

const app = express();

app.use('/progress', progressRoute);

const port = 3000;

Progress.sync()
    .then(() => {
        app.listen(port, console.log(`running in port ${port}`));
    });