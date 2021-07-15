const express = require('express');

const router = express.Router();
const Washer = require('../models/Washer')




router.get('/', async (req, res) => {
    try {
        // find all the data in the Washers collection
        let washerDetails = await Washer.find();
        res.render('collections', { users: washerDetails, title: 'Washer Details', routeName:'collections' })
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive washer details');
    }
})

module.exports = router;