const express = require('express');

const router = express.Router();
const adminUserName = 'admin'
const adminPassword = 'admin'

router.post('/adminLogin', (req,res)=>{
    const {username,password} =req.body
    if(username=== adminUserName || password=== adminPassword){
        res.send("Admin logged in")
    }else{
    res.statusCode(401).send("Unauthorized Access")
    }
})
module.exports = router;