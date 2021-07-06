const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('register_washer',{title:"Register Car Washer"})
})

router.post('/',(req,res)=>{
    console.log(req.body)
    res.send("Data has been submitted")
})

//exporting the file
module.exports = router;