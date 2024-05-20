const mangoose = require("mongoose")
const internshipSchema = new mangoose.Schema({

    title:String,
    company:String,
    location:String,
    Duration:String,
    category:String,
    aboutCompany:String,
    aboutInternship:String,
    Whocanapply:String,
    perks: Array,
    AdditionalInfo:String,
    stipend:String,
    StartDate:String,

    createAt:{
        type:Date,
        default:Date.now,
    },
    user:Object,
    
})

module.exports=mangoose.model('Internship',internshipSchema)