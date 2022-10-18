import adminModel from "../Model/admin.model.js";

export const adminSignup = async (req,res) => {
    const {fname , email , password} = req.body 
    try {
  
         const exists = await adminModel.findOne({email : email})
         if(exists){
            res.status(400).json("Email already  exists")
         }
         else{
            const valid = {fname : fname ,email: email, password : password }
            const data = await adminModel.create(valid)
            console.log("asfasdf")
            res.status(200).json({"message":"registered"})
        }
        
    } catch (error) {
        console.log(error);
    }
}

  