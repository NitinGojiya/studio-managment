import mongoose from 'mongoose';

const bookingSchema=new mongoose.Schema({
bookingstudio:{
    type:String,
    require:true
},
date:{
    type:String,
    require:true

},
mobile:{
    type:String,
    require:true
}

},{ timestamps: true });

export default mongoose.model("Booking",bookingSchema);