const express= require('express')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const router=express.Router({mergeParams: true})
const SignupSchema=require('../Models/SignModel')
var jwt = require('jsonwebtoken');
var cookieParser=require=("cookie-parser")

router.post("/signup", async(req,res)=>{
    const details= req.body;
    var flag=true;
    const check= await SignupSchema.findOne({name:details.name})
    const check2= await SignupSchema.findOne({email:details.email})
    if(check2){
        res.send("user already exist")
        flag=false;
    }
    if(check){
        res.send("username not availabel")
        flag=false;
    }
   
    if(flag)
    {
        const token= jwt.sign({name:details.name},"9oZJszXg4xsUOxY5m89cWh81Kvtip2ddTlUKbHNt1qhj5w5nHzoWiRzHWccmWUB54sv3ibedboowqQJIGncEhAnzzyoN50c9CUMZI8W1CoBhaFHgdV0RoRbqRESzUDMvOeXQGuLWiF9XqYBWKRkNAZGB4KznVMHUkszhph7I9ypDaOrNXbyyRXRfKg1URVcCXDHHzvwQS4UPcD0E4USJHOOL2ENlgAnl9zwR1qC45WjN4cd0yaPIkd04DVPDHLkSwPDc2FoVP2Mh4pOZWIwxfBAS6QDWORZHmZKupPSXU8OOduN1QTp0UjX5wgvJl78g")
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(details.password, salt);
        details.password=hash
        const user=new SignupSchema(details)
        const SignedUpUser= await user.save()
        res.cookie("jwtt",token,{
            maxAge:100*365*24*60*60*100,
            httpOnly:true,

            
        })
        res.status(200).send("OK")
}
})



module.exports=router