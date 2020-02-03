const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
const productRouter = require('./routes/product');

//use static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use(productRouter);



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


mongoose.connect('mongodb://127.0.0.1:27017/stock'
    ,options,(err)=>{
        console.log(err)
    }).then(res =>{
        console.log('connect');
        
        app.listen(5000);

    }).catch(err =>{
        console.log(err);
    })