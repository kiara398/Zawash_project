const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('login',{title:"login_page", routeName:"login"})
})

router.post('/',(req,res)=>{
    console.log(req.body)
    // res.render('dashboard')
})
module.exports = router;