// Dependecies
const express = require("express")

// instantiations
const app = express()

// settings or configurations
app.set('view engine', 'pug');
app.set('views', './views');

// middle ware
app.use(express.urlencoded({extended: true}))

// routes
app.get('/', (req,res) =>{
    res.send('Welcome to HOME PAGE!')
})
//routing to pug file. 
app.get('/register',(req,res)=>{
    res.render('register_washer',{title:"Register Car Washer"})
})

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send("Data has been submitted")
})

// handling non existing routes
app.get('*', (req, res)=> {
    res.status(404).send('OOPS! WRONG ADDRESS')
})

// server
app.listen(3002, ()=> console.log("Listening on Port 3002"));





















  