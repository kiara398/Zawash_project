// Dependecies
const express = require("express")
const path = require('path');
//requiring the routes.
const homeroutes = require('./routes/homeroutes')
const registerroutes = require('./routes/registerroutes')
const loginroutes = require('./routes/loginroutes')
const cartrackroutes = require('./routes/cartrackroutes')
const dashboardroutes = require('./routes/dashboardroutes')
const mongoose = require('mongoose')
require('dotenv').config();

// instantiations
const app = express()

//connect mongoose
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

// settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');

// middle ware
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', homeroutes)

app.use('/register', registerroutes)

app.use('/login', loginroutes)

app.use('/cartracking', cartrackroutes)

app.use('/dashboard', dashboardroutes)

// handling non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('OOPS! WRONG ADDRESS')
})

// server
app.listen(3002, ()=> console.log("Listening on Port 3002"));





















  