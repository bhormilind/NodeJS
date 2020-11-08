const express = require('express');

const adminRoutes = require('./routes/admin');
const shopping = require('./routes/shopping');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(adminRoutes);
app.use(shopping);


/// 404 -non finding routes
app.use((req,res,next) => {
    res.status(404).send('No URL found . . . ');
});

app.listen(4000);