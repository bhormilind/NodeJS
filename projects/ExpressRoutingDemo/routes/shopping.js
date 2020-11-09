const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','home.html'));
    // __dirname :- Present Directory
    // ../ :- go one level up
    // views :- go to 'views' directory 
    // home.html :- sending home.html page
});


module.exports = router;