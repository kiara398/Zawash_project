const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('login',{title:"login_page"})
})

router.post('/',(req,res)=>{
    console.log(req.body)
    // res.send("Successfully logged in!!")
})
module.exports = router;