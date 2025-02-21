import mongoose from 'mongoose';

const studioSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true, // ✅ Fixed 'require' typo
        },
        serviceType: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String, // ✅ Store the image path (if using multer)
            
        },
        city: {
            type: String,
            required: true,
        }
    },
    { timestamps: true } // ✅ Adds createdAt & updatedAt timestamps automatically
);

export default mongoose.model("Studio", studioSchema); // ✅ Use PascalCase for models
