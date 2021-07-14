const express = require('express');
const Cartrack = require('../models/Cartrack')
const router = express.Router();


router.get('/', async(req,res)=>{
        let washedVehicles = await Cartrack.aggregate(
        [ {$group: { _id: '$washer', count: { $sum: 1 }} },
          {$lookup: { from:'washers', localField:'_id', foreignField:'_id', as:"details"}}
        ])
        
        res.render("dashboard" , {washers: washedVehicles, title:"List of Car Washers", routeName:"dashboard"})
})


module.exports = router;