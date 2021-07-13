const express = require('express');

const router = express.Router();
const Cartrack = require('../models/Cartrack')
const Washer = require('../models/Washer')

// router.get('/',(req,res)=>{
//     res.render('cartracking',{title:"car-tracking", routeName:"cartracking"})
// })

router.get('/', async(req, res) => {
    let washerlist = await Washer.find();
    res.render('cartracking', { washers: washerlist,
        title: "car-tracking", routeName:"cartracking",alert:req.query.alert
    })
})

// router.post('/',(req,res)=>{
//     console.log(req.body)
//     // res.send("Successfully registered!!!")
//     const cartrack = new Cartrack(req.body);
//     cartrack.save()
//        .then(()=>{res.send('registered successfully!');})
//        .catch((err) =>{console.log(err); res.send('OOPS! something went wrong');})
// })

router.post('/', async(req,res)=>{
    let data = req.body
    let datetimeArrival = Date.parse(data.today + 'T' + data.time)
     data.datetimeArrival = datetimeArrival
    try{
       const cartrack = new Cartrack(req.body)
       await cartrack.save()
       res.redirect('cartracking?alert=success')
    }
    catch(err){
        res.status(400).render('cartracking', {title:"car-tracking", routeName:"cartrack", alert:'error'})
    }
})
module.exports = router;