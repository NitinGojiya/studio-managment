import User from "../model/User.js";


import Studio from "../model/studio.js";
import City from "../model/City.js";
import Booking from "../model/Booking.js";
import multer from "multer";
import path from "path";
export const user=async (req,res) =>{
    try {
        const fetchuser=await User.find();
        if(fetchuser.length === 0)
        {
            return res.status(404).json({message:"user not found"});
        }
        res.status(200).json(fetchuser)
    } catch (error) {
        res.status(500).json({error:"internal Server Error"});
    }
};

export const create =async (req,res)=>{
    try {
        const userdata=new User(req.body);
       const email= req.body.email;
        const exitUser= User.find(user =>user.email === email);
        // console.log(exitUser)
        // if(exitUser)
        // {
        //    return res.status(400).json({message:"user Already Register"});
        // }
        const saveUser=await userdata.save();
        res.status(200).json(saveUser);

    } catch (error) {
        res.status(500).json({error:"internal server Error"});
    }
}

export const fetchstudio=async (req,res) =>{
    try {
        const fetchstudio=await Studio.find();
        if(fetchstudio.length === 0)
        {
            return res.status(404).json({message:"user not found"});
        }
        res.status(200).json(fetchstudio)
    } catch (error) {
        res.status(500).json({error:"internal Server Error"});
    }
};
export const fetchstudio1=async (req,res) =>{
    try {
        const id=req.params.id;
        const fetchstudio=await Studio.findOne({_id:id});
      
    
        if(fetchstudio.length === 0)
        {
            return res.status(404).json({message:"Studio  not found"});
        }
        res.status(200).json(fetchstudio)
    } catch (error) {
        res.status(500).json({error:"internal Server Error"});
    }
};

export const createstudio = async (req, res) => {
    try {
        const { stuidoname, city, mobile, email, address } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Store image path
        const serviceType="video/photo";
        // Create a new studio object
        const studiodata = new Studio({
            name: stuidoname,
            city,
            mobile,
            email,
            serviceType,
            address,
         imageUrl, // Save image URL in DB
        });

        // Save studio to the database
        const saveStudio = await studiodata.save();

        res.status(200).json({ message: "Studio Created Successfully", data: saveStudio });
    } catch (error) {
        console.error("Error creating studio:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const fetchcity=async (req,res) =>{
    try {
        const fetchcity=await City.find();
        if(fetchstudio.length === 0)
        {
            return res.status(404).json({message:"city not found"});
        }
        res.status(200).json(fetchcity)
    } catch (error) {
        res.status(500).json({error:"internal Server Error"});
    }
};

export const createbooking =async (req,res)=>{
    try {
        const bookingdata=new Booking(req.body);
        const saveBooking=await bookingdata.save();
        res.status(200).json(saveBooking);

    } catch (error) {
        res.status(500).json({error:"internal server Error"});
    }
}

export const fetchbooking=async (req,res) =>{
    try {
        const fetchbooking=await Booking.find();
        if(fetchbooking.length === 0)
        {
            return res.status(404).json({message:"Booking not found"});
        }
        res.status(200).json(fetchbooking)
    } catch (error) {
        res.status(500).json({error:"internal Server Error"});
    }
};



export const updateStudio=async(req,res)=>{
    try {
        const id=req.params.id;
        const studioExist=await Studio.findOne({_id:id})
        if(!studioExist)
        {
            return res.status(404).json({message:"Studio not found"}); 
        }
        const changeStudio=await Studio.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(changeStudio)
        // res.status(200).json({message:"done"})
    } catch (error) {
        res.status(500).json({error:`internal Server Error ${error}`});
    }
}


export const deleteStudio=async(req,res)=>{
    try {
        const id=req.params.id;
        const studioExist=await Studio.findOne({_id:id})
        if(!studioExist)
        {
            return res.status(404).json({message:"Studio not found"}); 
        }
        const changeStudio=await Studio.findByIdAndDelete(id)
        res.status(200).json(changeStudio)
        // res.status(200).json({message:"done"})
    } catch (error) {
        res.status(500).json({error:`internal Server Error ${error}`});
    }
}