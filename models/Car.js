let mongoose=require('mongoose');

let carSchema=mongoose.Schema({

    maker:String,
    year:Number,
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]

});

let carModel=mongoose.model("Car",carSchema);

module.exports=carModel;