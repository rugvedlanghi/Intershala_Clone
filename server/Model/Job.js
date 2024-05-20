const mangoose = require("mongoose")
const jobSchema = new mangoose.Schema({

    title:String,
    company:String,
    location:String,
    Experience:String,
    category:String,
    aboutCompany:String,
    aboutJob:String,
    Whocanapply:String,
    perks: Array,
    AdditionalInfo:String,
    CTC:String,
    StartDate:String,

    createAt:{
        type:Date,
        default:Date.now,
    },
    user:Object,
    
})

module.exports=mangoose.model('Job',jobSchema)