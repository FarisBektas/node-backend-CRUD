const mongoose = require('mongoose')

const timeArrivalSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required: true
    },time:{
        type:String,
        required: true
    }
});

const timeArrivalModel= mongoose.model('arrivals',timeArrivalSchema);

module.exports = timeArrivalModel;