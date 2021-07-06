const express = require('express');

const router = express.Router();

router.get('/', (req,res) =>{
    res.render('home', {title:"home_page"})
})

module.exports = router;