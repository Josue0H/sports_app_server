const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/sports.js');
require("dotenv").config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use('/api', router);
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
