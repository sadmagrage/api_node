const express = require('express');
const cors = require("cors");

const Progress = require('./models/ProgressModel');
const progressRoute = require("./routes/progressRoutes");

const app = express();

app.use('/progress', progressRoute);
app.use(cors({ origin: "https://sadma-progress.vercel.app" }))

const port = 3000;

Progress.sync()
    .then(() => {
        app.listen(port, console.log(`running in port ${port}`));
    });