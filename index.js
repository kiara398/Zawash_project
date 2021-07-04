// Dependecies
const express = require("express")
const path = require('path');
const { title } = require("process");
// instantiations
const app = express()

// settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');

// middle ware
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req,res) =>{
    res.render('home', {title:"home_page"})
})

app.get('/register',(req,res)=>{
    res.render('register_washer',{title:"Register Car Washer"})
})

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send("Data has been submitted")
})
app.get('/login',(req,res)=>{
    res.render('login',{title:"login_page"})
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send("Successfully logged in!!")
})

// handling non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('OOPS! WRONG ADDRESS')
})

// server
app.listen(3002, ()=> console.log("Listening on Port 3002"));





















  