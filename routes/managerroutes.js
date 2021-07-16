const express = require('express');
const Manager = require('../models/Manager')
const mongoose = require('mongoose');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('register_manager',{title:"managers"})
})

router.post('/', async(req,res)=>{
    const manager = new Manager(req.body);
    await Manager.register(manager, req.body.password, (err)=>{
        if(err){
            res.status(400).render('register_manager',{title: "managers"})
            console.log(err)
        }else{
            res.redirect('register_manager')
        }
    })
})
module.exports = router;