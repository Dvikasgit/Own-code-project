import mongoose, { Schema } from 'mongoose'

const ratingM = Schema({
   
    rate : {
        type : Number,
        require : true
    },
    feedback: {
        type : String,
        require : true
    }
})
    const ratindSc = mongoose.model("rating",ratingM)


    export default ratindSc;