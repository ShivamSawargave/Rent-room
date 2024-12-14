import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';
import Contactus from "../model/user.contact.js";
import Confirmation from "../model/user.Confirm.js";
import RoomOwner from '../model/user.Owner.js';

export const signup=async(req,res)=>{
    try{
        const {fullname,email,password,mobilenumber}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        const hashPassword =await bcryptjs.hash(password,10)
        const createdUser= new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
            mobilenumber:mobilenumber
        })
        await createdUser.save()
        res.status(201).json({message:"User created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};


export const login=async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user= await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username and password"});
        }
        else{
            res.status(200).json({message:"login successfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
        }});
        }
    } catch (error) {
        console.log("error: "+ error.message)
        res.status(500).json({message:"User are not found"});
    }
}

export const confirm=async(req,res)=>{
    try{
        const {fullname,email,password,mobilenumber,roomaddress}=req.body;
        const customer=await Confirmation.findOne({email})
        if(customer){
            return res.status(400).json({message:"Room already Confirm"})
        }

        const hashPassword =await bcryptjs.hash(password,10)
        const createdUser= new Confirmation({
            fullname:fullname,
            email:email,
            password:hashPassword,
            mobilenumber:mobilenumber,
            roomaddress:roomaddress
        })
        await createdUser.save()
        res.status(201).json({message:"Room confirmed successfully",customer:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};


export const contact=async(req,res)=>{
    try{
        const {firstname,lastname,email,phonenumber,Message}=req.body;
        const contactus=await Contactus.findOne({})
        if(contactus){
            return res.status(400).json({message:"Your message already submited, I'll contact you as soon as"})
        }

        
        const createdUser= new Contactus({
            firstname:firstname,
            lastname:lastname,
            email:email,
            Message:Message,
            phonenumber:phonenumber
        })
        await createdUser.save()
        res.status(201).json({message:"contact you soon",contactus:{
            _id:createdUser._id,
            firstname:createdUser.firstname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};

export const rent=async(req,res)=>{
    try{
        const {firstname,lastname,email,phonenumber,Message,address}=req.body;
        const owner=await RoomOwner.findOne({})
        if(owner){
            return res.status(400).json({message:"Your message already submited, I'll contact you as soon as"})
        }

        
        const createdUser= new RoomOwner({
            firstname:firstname,
            lastname:lastname,
            email:email,
            Message:Message,
            phonenumber:phonenumber,
            address:address
        })
        await createdUser.save()
        res.status(201).json({message:"contact you soon",owner:{
            _id:createdUser._id,
            firstname:createdUser.firstname,
            email:createdUser.email
        }});
    }catch(error){
        console.log("Error:",error.message)
        res.status(500).json({message:"Internal server error"});
    }
};

