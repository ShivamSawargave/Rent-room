import mongoose from 'mongoose';

const userSchema= mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
   
})
const RoomOwner=mongoose.model("RoomOwner",userSchema);
export default RoomOwner;