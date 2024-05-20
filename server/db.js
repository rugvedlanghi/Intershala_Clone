const mongoose= require('mongoose');
const url =`mongodb+srv://admin:admin123456789@intershalaclone.lhwfebc.mongodb.net/?retryWrites=true&w=majority&appName=IntershalaClone`

module.exports.connect=()=>{
    mongoose.connect(url,console.log("Connection Established"))
}