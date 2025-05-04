import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rollNo:{
        type:String,
        required:true,
    },
    father:{
        type:String,
        required:true,
    },
    mother:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
});

const Form = mongoose.model("Form",formSchema);
export default Form;