import mongoose from 'mongoose'

const adminM = mongoose.Schema({
    fname : {
        type : String,
        require : true
    },
    
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const adminModel = mongoose.model("abc",adminM);

export default adminModel;