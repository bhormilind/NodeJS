const express =require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/about-us',(req,res,next) => {
    console.log('First middle ware');
    res.send('We are a century old busineess');
});

app.use('/add-product',(req,res,next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="Submit" name="ok">OK</button></form>');
});

app.use('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next) => {
    console.log('Second middle ware');
    res.send('Hello ');
})

app.listen(4500);