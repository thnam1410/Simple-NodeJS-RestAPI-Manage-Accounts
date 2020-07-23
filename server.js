//Set up project
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//Set up DB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => (console.log(error)));
db.once('open', () => (console.log('Connected to Database')));

app.use(express.json());

const accountRouter = require('./routes/accounts')

app.use('/account',accountRouter);


//Listen
app.listen(port, () => {
    console.log("Listen on port "+port);
});