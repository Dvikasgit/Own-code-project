import { json } from "express";
import adminModel from "../Model/admin.model.js";
import hotelModel from "../Model/hotel.model.js";
import ratindSc from "../Model/rating.js";

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

export const adminLogin = async(req,res) =>{
   
    const {email , password } = req.body
    try {
        const validd = await adminModel.findOne({email : email , password : password})
        if(validd){
            res.status(200).json({"message" : "login successfully"})
        }else{
            res.status(400).json("invalid user name and password")

        }
    } catch (error) {
        console.log(error)
    }
}


export const hotelData = async (req, res) => {
    const {hName , address , hotelImg , hotelNumber , reason , hotelbed , hotelpool} = req.body

    try {
        const avil = await hotelModel.create({hName : hName , address : address , hotelImg : hotelImg , hotelNumber : hotelNumber , reason:reason ,hotelbed : hotelbed , hotelpool : hotelpool })
        res.status(200).json(avil);
    } catch (error) {
        console.log(error)
    }
}


export const getHotelD = async (req,res ) => {
    const neww = await hotelModel.find({})
    res.status(200).json(neww);
}

export const takeRating = async (req,res) =>{
    const {rate , feedback } = req.body
    try {
       const  rating = await ratindSc.create({rate : rate , feedback : feedback})
        res.status(200).json(rating);
    } catch (error) {
        console.log(error)
    }
}


export const singleItem = async (req,res) =>{
    const {id} = req.body
    try {
        const findd = await hotelModel.findOne({_id:id})
        res.json({findd})
        console.log(findd);
    } catch (error) {
        console.log(error)
    }
}

export const getRatingall = async (req,res) =>{
    console.log("req.body.params",req.params.id)
    const getRating = await ratindSc.findById(req.params.id)
    res.status(200).json(getRating)
}

export const singleGet = async (req,res) =>{
     //console.log("req.body.params",req.params.id)
    const neww = await hotelModel.findById(req.params.id)
    res.status(200).json(neww);
}

export const getWithoutId  = async (req,res) => {
    const getWithout = await ratindSc.find({})
    res.status(200).json(getWithout)
}

