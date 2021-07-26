//import dependencies
const express = require('express');
const passport = require('passport')
const router = express.Router();

//get the login page data
router.get('/login',(req,res)=>{
    res.render('login',{title:"login_page", routeName:"login", alert: req.query.alert})
})

//post method for when the login details are authentic
router.post('/login', passport.authenticate('local',
    {failureRedirect: '/login?alert=error'}),
    (req,res)=>{
        //giving a session to the user when successfully logged in. 
        req.session.user=req.user
        //redirect user to car registration page after logging in. 
        res.redirect('/cartracking');
})

//requesting to destroy a session when the user logs out and redirecting user to home page. 
router.get('/logout', (req, res) => {
    req.session.destroy(()=> {
       res.redirect('/')
     })
   })
module.exports = router;