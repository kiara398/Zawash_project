const express = require('express');

const Inventory = require('../models/Inventory')
const router = express.Router();



router.get('/',(req,res) =>{

    res.render('inventory', {title:"Inventory", routeName:"inventory"})
})

router.post('/', async(req,res)=>{
    try{
        const invent = new Inventory(req.body);
        await invent.save()
        res.redirect('inventory')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('inventory', {title:"Inventory", routeName:"inventory"})
    }
})

//exporting the file
module.exports = router;