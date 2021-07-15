const express = require('express');

const router = express.Router();
const Cartrack = require('../models/Cartrack')
const Washer = require('../models/Washer')


washPackages = {
    smallcars: {washerFee: 3000, packagePrice: 10000},
    medium: {washerFee: 4000, packagePrice: 15000},
    fullwash: {washerFee: 5000, packagePrice: 20000},
    engine: {washerFee: 2000, packagePrice: 10000},
    bodaboda: {washerFee: 1500, packagePrice: 5000},
    truck: {washerFee: 5000, packagePrice: 20000},
}

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
    try{
        let data = req.body
        let datetimeArrival = Date.parse(data.today + 'T' + data.time)
        data.datetimeArrival = datetimeArrival

        let packageDetails = washPackages[data.package]
        data.packagePrice = packageDetails['packagePrice']
        data.washerFee = packageDetails['washerFee']

       const cartrack = new Cartrack(req.body)
       await cartrack.save()
       res.redirect('cartracking?alert=success')
    }
    catch(err){
        res.status(400).render('cartracking', {title:"car-tracking", routeName:"cartrack", alert:'error'})
    }
})
module.exports = router;