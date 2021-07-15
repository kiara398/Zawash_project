const express = require('express');
const moment = require('moment');
const router = express.Router();
const Cartrack = require('../models/Cartrack')




router.get('/', async (req, res) => {
    try {
        // find all the data in the cars collection
        let selectedDate = moment().format('YYYY-MM-DD')
        if(req.query.searchdate) selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        let collectionDetails = await Cartrack.find({ today: selectedDate })

        // query for total expense on a day
        let totalCollection = await Cartrack.aggregate([
            { $match: { today: new Date(selectedDate) } },
            { $group: { _id: '$today', totalCollection: { $sum: '$packagePrice' } } }
        ])

        res.render("cars", {
            cars: collectionDetails, total: totalCollection[0],
            title: "Cars", defaultDate: selectedDate
        })

    } 
    catch (err) {
        console.log(err)
        res.send('Failed to retrive car details');
    }
})

module.exports = router;