//importing necessary dependencies
const express = require('express');
const Inventory = require('../models/Inventory')
const moment = require('moment');
const mongoose = require('mongoose');
const router = express.Router();

//requesting data
router.get('/', async(req,res)=>{
    try{
        let selectedDate = moment().format('YYYY-MM-DD')
        if(req.query.searchdate) selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

       //Returning daily expenses
        let dailyExpenses = await Inventory.find({doi:selectedDate})
        let totalCost = await Inventory.aggregate(
            [
                {$match: {doi: new Date(selectedDate)}},
                {$group: {_id:'$doi', totalCost: {$sum: '$price'}}},
                
            ])

        res.render("costs" , {inventories:dailyExpenses, title:"Costs", 
        defaultDate:selectedDate, sumCost:totalCost[0]})
    }
    //handling an error
    catch(err) {
        console.log(err)
        res.send('OOPS! something went wrong!')
    }
})
module.exports = router;