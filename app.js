const express = require('express');
const progressModel = require('./models/ProgressModel');
const app = express();
const port = 3000;

app.use('/comida', require('./routes/comidaRoutes').router);
app.use('/progress', require('./routes/progressRoutes').router);

progressModel.sync()
    .then(() => {
        app.listen(port, console.log(`running in port ${port}`));
    });