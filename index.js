const express= require('express');
const cookieParser = require('cookie-parser');
const app= express();
const port=8000;
const expressLayouts= require('express-ejs-layouts');
const db =require('./config/mongoose');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
// const sassMiddleware = require('node-sass-middleware');


app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);

app.set('layout extractStyles', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret:'something',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge: (24 * 60 * 60 * 1000)
    },
    store: new mongoStore({
        mongooseConnection: db,
        autoRemove:'disabled',
    }, function(err){
        console.log(err || 'connect-mongo set up ok.')
    })
}))






app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log("Error in establishing server");
        return;
    }

    console.log("connected to Server:",port);
})