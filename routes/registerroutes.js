const express = require('express');
const mongoose = require('mongoose');
const Washer = require('../models/Washer')

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('register_washer',{title:"Register Car Washer", routeName:"register"})
})

router.post('/',(req,res)=>{
    console.log(req.body)
    // res.send("Data has been submitted")
    const washer = new Washer(req.body);
    washer.save()
        .then(() =>{ res.send('Washer registered successfully!!');})
        .catch((err) =>{console.log(err); res.send('OOPS! something went wrong');})
})

//exporting the file
module.exports = router;