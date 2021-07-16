// Dependecies
const express = require("express")
const path = require('path');
const moment = require('moment')
const mongoose = require('mongoose')
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const passport = require('passport')
//requiring the routes.
const homeroutes = require('./routes/homeroutes')
const registerroutes = require('./routes/registerroutes')
const loginroutes = require('./routes/loginroutes')
const cartrackroutes = require('./routes/cartrackroutes')
const dashboardroutes = require('./routes/dashboardroutes')
const costroutes = require('./routes/costroutes')
const collectionroutes = require('./routes/collectionroutes')
const carcollroutes = require('./routes/carcollroutes')
const managerroutes = require('./routes/managerroutes')
const inventoryroutes = require('./routes/inventoryroutes')
const Manager = require('./models/Manager')

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
app.locals.moment = moment

// middle ware
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(Manager.createStrategy());
passport.serializeUser(Manager.serializeUser());
passport.deserializeUser(Manager.deserializeUser());

var loginChecker = function (req, res, next) {
  if (req.path != '/login' &&req.path != '/' && !req.session.user) {
    res.redirect('/')
  }
  next()
}
app.use(loginChecker)

// routes
app.use('/', homeroutes)

app.use('/register', registerroutes)

app.use('/costs', costroutes)

app.use('/', loginroutes)

app.use('/cartracking', cartrackroutes)

app.use('/dashboard', dashboardroutes)

app.use('/inventory', inventoryroutes)

app.use('/register_manager', managerroutes)

app.use('/collections', collectionroutes)

app.use('/cars', carcollroutes)


// handling non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('OOPS! WRONG ADDRESS')
})

// server
app.listen(3002, ()=> console.log("Listening on Port 3002"));





















  