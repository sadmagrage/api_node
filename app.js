const express = require('express');
const cors = require("cors");

const Progress = require('./models/ProgressModel');
const progressRoute = require("./routes/progressRoutes");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(cors({ origin: "https://progress-rework.vercel.app" }));
//app.use(cors({ origin: "*" }));

app.use('/progress', progressRoute);
app.use('/user', userRoute);

const port = 3000;

Progress.sync()
    .then(() => {
        app.listen(port, console.log(`running in port ${port}`));
    });