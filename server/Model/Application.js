const mangoose = require("mongoose")
const applicationSchema = new mangoose.Schema({
    company:String,
    Category:String,
    coverLetter:String,

    createAt:{
        type:Date,
        default:Date.now,
    },
    Application:Object,
    user:Object,
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending"
    }
})

module.exports=mangoose.model('Application',applicationSchema)