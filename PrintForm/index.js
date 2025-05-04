import mongoose from "mongoose";
import express from "express";
import Form from "./Models/form.js";

const app = express();
app.use(express.urlencoded({extended:true}));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Forms")
}

main()
.then(()=>{
    console.log("DB connected successfully");
})
.catch((error)=>{
    console.log(error);
})
app.post('/saveForm', async (req,res)=>{
    const {email} = req.body;
    if(await Form.findOne({email})){
        return res.send("Already saved");
    }
    await Form.insertOne(req.body);
    return res.send("Saved");
})
app.get('/',(req,res)=>{
    res.render("form.ejs");
})


app.listen(8080,()=>{
    console.log("App is listening");
})