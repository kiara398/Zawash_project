const express = require('express');
const Cartrack = require('../models/Cartrack')
const moment = require('moment');
const router = express.Router();


router.get('/', async(req,res)=>{
    try{
        let selectedDate = moment().format('YYYY-MM-DD')
        if(req.query.searchdate) selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')
        let washedVehicles = await Cartrack.aggregate(
        [  {$match: {today: new Date(selectedDate)}},
           {$group: { _id: '$washer', count: { $sum: 1 }, totalPayout: {$sum:'$washerFee'} } },
           {$lookup: { from:'washers', localField:'_id', foreignField:'_id', as:"details"}}
        ])
        
        //gettin total payout of washers for each selected date.
        let totalPayoutPerDay = await Cartrack.aggregate(
            [
                {$match: {today: new Date(selectedDate)}},
                {$group: {_id:'$today', totalPayoutPerDay: {$sum: '$washerFee'}}}
            ]
        )
        res.render("dashboard" , {washers: washedVehicles, title:"List of Car Washers", 
        defaultDate:selectedDate, sumPayout:totalPayoutPerDay[0], routeName:"dashboard"})
    }
    catch(err) {
        console.log(err)
        res.send('OOPS! something went wrong!')
    }
})


module.exports = router;