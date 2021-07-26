//import all the necessary dependencies.
const express = require('express');
const moment = require('moment');
const router = express.Router();
const Cartrack = require('../models/Cartrack')

//using the get method to handle requests 
router.get('/', async (req, res) => {
    //using the try statement to test our block of code. 
    try {
        // find a date in the cars collection
        let selectedDate = moment().format('YYYY-MM-DD')
        if(req.query.searchdate) selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        let collectionDetails = await Cartrack.find({ today: selectedDate })

        // query for total amount collected in a day by matching the date and grouping it with the day's collections
        let totalCollection = await Cartrack.aggregate([
            { $match: { today: new Date(selectedDate) } },
            { $group: { _id: '$today', totalCollection: { $sum: '$packagePrice' } } }
        ])
    //render our pug file and collections
        res.render("cars", {
            cars: collectionDetails, total: totalCollection[0],
            title: "Cars", defaultDate: selectedDate
        })

    } 
    //using the  catch statement to handle an error
    catch (err) {
        console.log(err)
        res.send('Failed to retrive car details');
    }
})

module.exports = router;