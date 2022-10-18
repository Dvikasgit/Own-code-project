import mongoose from "mongoose";

const url = "mongodb://localhost:27017"
mongoose.connect(url)

console.log("Dabase connected successfully");