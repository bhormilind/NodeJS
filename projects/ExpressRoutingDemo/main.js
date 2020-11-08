const express = require('express');

const adminRoutes = require('./routes/admin');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(adminRoutes);

app.get('/',(req,res,next) => {
    res.send('Welcome to routing express demo ');
});

app.listen(4000);