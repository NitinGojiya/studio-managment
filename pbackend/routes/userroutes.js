import express from 'express';
import multer from "multer";
import path from "path";

import { 
    user, create, fetchstudio, createstudio, fetchcity, 
    fetchbooking, updateStudio, deleteStudio, createbooking, fetchstudio1 
} from "../controller/usercontroller.js";

const route = express.Router();

// ✅ Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage });

// ✅ Define routes AFTER multer is initialized
route.get("/user", user);
route.post("/create", create);
route.post("/createstudio", upload.single("file"), createstudio); // ✅ Now 'upload' is defined before use
route.get("/fetchstudio", fetchstudio);
route.get("/fetchstudio1/:id", fetchstudio1);
route.get("/fetchcity", fetchcity);
route.post("/createbooking", createbooking);
route.get("/fetchbooking", fetchbooking);
route.put("/updatestudio/:id", updateStudio);
route.delete("/deletestudio/:id", deleteStudio);

export default route;
