const express = require('express');

const router = express.Router();
const Cartrack = require('../models/Cartrack')

router.get('/',(req,res)=>{
    res.render('cartracking',{title:"car-tracking", routeName:"cartracking"})
})

router.post('/',(req,res)=>{
    console.log(req.body)
    // res.send("Successfully registered!!!")
    const cartrack = new Cartrack(req.body);
    cartrack.save()
       .then(()=>{res.send('registered successfully!');})
       .catch((err) =>{console.log(err); res.send('OOPS! something went wrong');})
})
module.exports = router;