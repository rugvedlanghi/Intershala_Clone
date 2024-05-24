const express = require("express")
const router= express.Router();
const internRoute=require("./InternshipRoute")
const ApplicationRoute=require("./ApplicationRoute")
const job = require("./JobRoute")
const admin = require('./Admin')

router.get("/",(req,res)=>{
    res.send("This is backend")
})
router.use('/application',ApplicationRoute);
router.use("/internship",internRoute)
router.use("/jobs",job)
router.use("/admin",admin)

module.exports=router;