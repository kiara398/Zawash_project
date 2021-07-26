const express = require('express');

const router = express.Router();
//getting data for our home page. 
router.get('/', (req,res) =>{
    res.render('home', {title:"home_page", routeName:"home"})
})

module.exports = router;