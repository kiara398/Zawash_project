const express = require('express');
const passport = require('passport')
const router = express.Router();

router.get('/login',(req,res)=>{
    res.render('login',{title:"login_page", routeName:"login", alert: req.query.alert})
})

router.post('/login', passport.authenticate('local',
    {failureRedirect: '/login?alert=error'}),
    (req,res)=>{
        req.session.user=req.user
        res.redirect('/');
})

router.get('/logout', (req, res) => {
    req.session.destroy(()=> {
       res.redirect('/login')
     })
   })
module.exports = router;