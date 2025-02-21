import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import route from './routes/userroutes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_CON = process.env.MONGO_CON;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(MONGO_CON, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.error(" Database connection error:", err));

// Multer Setup (For File Uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage });

// Serve Static Files (Uploaded Images)
app.use("/uploads", express.static("uploads"));

// Use Routes
app.use("/api/studio", route);

// Start Server
app.listen(PORT, () => {
  console.log(` Backend running on port ${PORT}`);
});

// Export Multer Middleware (for use in routes)
export { upload };
