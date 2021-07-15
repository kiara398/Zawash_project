const express = require('express');
const mongoose = require('mongoose');
const Washer = require('../models/Washer')

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('register_washer',{title:"Register Car Washer", routeName:"register", alert:req.query.alert})
})

// router.post('/',(req,res)=>{
//     console.log(req.body)
//     // res.send("Data has been submitted")
//     const washer = new Washer(req.body);
//     washer.save()
//         .then(() =>{ res.send('Washer registered successfully!!');})
//         .catch((err) =>{console.log(err); res.send('OOPS! something went wrong');})
// })

router.post('/', async(req,res)=>{
    try{
        const washer = new Washer(req.body);
        await washer.save()
        res.redirect('register?alert=success')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('register_washer', {title:"Register Car Washer", routeName:"register", alert:'error'})
    }
})

router.post('/delete-washer', async (req, res) => {
    try {
        await Washer.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})



//exporting the file
module.exports = router;