import mongoose from 'mongoose'

const adminModell = mongoose.Schema({
    hName : {
        type : String,
        require : true
    },
    
    address : {
        type : String,
        require : true
    },
    hotelImg : {
        type : String,
        require : true
    },
    hotelbed : {
        type : String,
        require : true
    },
    hotelpool : {
        type : String,
        require : true
    },
    hotelNumber : {
        type : Number,
        require : true
    },
    reason : {
        type : String,
        require : true
    }
})

const hotelModel = mongoose.model("hotel",adminModell);

export default hotelModel;