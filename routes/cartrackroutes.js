const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('cartracking',{title:"car-tracking"})
})

router.post('/',(req,res)=>{
    console.log(req.body)
    res.send("Successfully registered!!!")
})
module.exports = router;