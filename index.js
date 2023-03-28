const express= require('express');
const cookieParser = require('cookie-parser');
const app= express();
const port=8000;
const expressLayouts= require('express-ejs-layouts');
const db =require('./config/mongoose');
// const sassMiddleware = require('node-sass-middleware');


app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles', true);

app.set('view engine', 'ejs');
app.set('views', './views');






app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log("Error in establishing server");
        return;
    }

    console.log("connected to Server:",port);
})