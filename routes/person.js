const { response } = require("express");
const express= require("express");
const personRouter = express.Router();
const person=require("../models/person")
//create a person and save it 
//req.body
//METHODE : POST

personRouter.post("/",async(req,res)=>{
try {
    
const newperson= new person(req.body);
let result=await newperson.save();
res.send({result:result, msg:"user added"});
} catch (error) {
    console.log(error);
}
});



//get all person 
//METHODE : GET 
personRouter.get("/",async(req,res)=>{
    try {
        let result=await person.find();
        res.send({person:result,msg: "all users"});
    } catch (error) {
        console.log(error);
    }
})




//get one person 
//METHODE : GET
// params

personRouter.get("/:id",async(req,res)=>{
    try {
        const id=req.params;
        let result=await person.findOne({_id : req.params.id});
        res.send({person:result,msg: "user"});
    } catch (error) {
        console.log(error);
    }
})




//update person 
//METHODE :PUT
//params
//req.body

personRouter.put("/:id",async(req,res)=>{
    try {
        

        let result=await person.findOneAndUpdate({
            _id:req.params.id,
            $set:{...req.body},
        });
        res.send({newUser:result,msg:"user updated"})
    } catch (error) {
        console.log(error);
        
    }
})



//delete person 
//METHODE :DELETE
//params

personRouter.delete("/:id",async(req,res)=>{
    try {
        

        let result=await person.findOneAndRemove({
            _id:req.params.id,
           
        });
        res.send({msg:"user deleted"})
    } catch (error) {
        console.log(error);
        
    }
})



module.exports= personRouter;