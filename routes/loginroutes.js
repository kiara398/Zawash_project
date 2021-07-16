const express = require('express');
const passport = require('passport')
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('login',{title:"login_page", routeName:"login"})
})

router.post('/',passport.authenticate('local',
    {failureRedirect: '/login?alert=error'}),
    (req,res)=>{
        req.session.user=req.user
        res.redirect('/');
})
module.exports = router;