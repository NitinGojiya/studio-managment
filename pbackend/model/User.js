import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true

},
email:{
    type:String,
    require:true  
  
}
,
mobile:{
    type:String,
    require:true
},
address:{
    type:String,
    require:true
},



},{ timestamps: true });

export default mongoose.model("user",userSchema);