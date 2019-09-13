let mongoose=require('mongoose');

let userSchema=mongoose.Schema({
    name:String,
    age:Number,
    address:String
});

let userModel=mongoose.model("User",userSchema);

module.exports=userModel;