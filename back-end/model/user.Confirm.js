import mongoose from 'mongoose';

const userSchema= mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    roomaddress:{
        type:String,
        required:true
    }
   
})
const Confirmation=mongoose.model("Confirmation",userSchema);
export default Confirmation;