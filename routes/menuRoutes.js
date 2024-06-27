const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/menu');


router.post('/', async(req,res)=>{///async ---means asyncronous function --- it will take long time to execute 
    try{
        const menudata = req.body
        const newMenu = new MenuItem(menudata);

        const response2 = await newMenu.save();//////await ---it is used to when we have to wait ---await --it will wait till the above function is executed 
        console.log('data saved');
        res.status(200).json(response2);//////200 -http response means that file is succesfully saved 
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }
})

router.get('/', async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }
})

router.get('/.taste',(req,res)=>{
    console.log("your data as per your required taste")
});
module.exports = router;