const express =require("express")
const router= express.Router();
const job=require("../Model/Job");
const jobd=require("../Data/JobData");


router.post('/', async(req,res)=>{
    try{
        const jobs= jobd;

        const savedjobs = [];


        for(const jobData of jobs){
            const newjob = new job(jobData);
            const savedjob = await newjob.save();
            savedjobs.push(savedjob);
        }

        res.send(savedjobs);
    }catch(error){
        console.error("Error while posting the data: ",error);
        res.status(500).send("Internal Server Error");
    }
});

/*
router.get("/",async (req,res)=>{
    try {
        const data=await internship.find();
        res.json(data) .status(200)
    } catch (error) {
        console.log(err);
        res.status(404).json({error:"Internal server error "})
    }
})


router.get("/:id", async (req,res)=>{
    const {id}=req.params;
    try {
        const data=await internship.findById(id);
        if (!data) {

             res.status(404).json({error:"Internship is not found "})
        }
        res.json(data) .status(200)
    } catch (error) {
        console.log(err);
        res.status(404).json({error:"Internal server error "})
    }
})
*/
module.exports=router