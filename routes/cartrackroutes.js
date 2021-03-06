//importing all necessary dependencies
const express = require('express');
const router = express.Router();
const Cartrack = require('../models/Cartrack')
const Washer = require('../models/Washer')

//listing packages offered at the washing bay. 
washPackages = {
    smallcars: {washerFee: 3000, packagePrice: 10000},
    medium: {washerFee: 4000, packagePrice: 15000},
    fullwash: {washerFee: 5000, packagePrice: 20000},
    engine: {washerFee: 2000, packagePrice: 10000},
    bodaboda: {washerFee: 1500, packagePrice: 5000},
    truck: {washerFee: 5000, packagePrice: 20000},
}

//using get method with async and await to request data from the washers schema
router.get('/', async(req, res) => {
    let washerlist = await Washer.find();
    res.render('cartracking', { washers: washerlist,
        title: "car-tracking", routeName:"cartracking",alert:req.query.alert
    })
})

//using a post method to send data and update our form
router.post('/', async(req,res)=>{
    //using the try statement to test our block of code.
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
     //using the  catch statement to handle an error
    catch(err){
        res.status(400).render('cartracking', {title:"car-tracking", routeName:"cartrack", alert:'error'})
    }
})
//exporting the router.
module.exports = router;