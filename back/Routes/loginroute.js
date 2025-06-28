const express= require('express')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const router=express.Router({mergeParams: true})
const SignupSchema=require('../Models/SignModel')
var jwt = require('jsonwebtoken');
var cookieParser=require=("cookie-parser")

router.post("/login",async (req,res)=>{
    const details= req.body;

    const check1= await SignupSchema.findOne({email:details.email})
    const check2= bcrypt.compareSync(details.password, check1.password); 

    if(check1&&check2){
        const token= jwt.sign({name:check1.name},"9oZJszXg4xsUOxY5m89cWh81Kvtip2ddTlUKbHNt1qhj5w5nHzoWiRzHWccmWUB54sv3ibedboowqQJIGncEhAnzzyoN50c9CUMZI8W1CoBhaFHgdV0RoRbqRESzUDMvOeXQGuLWiF9XqYBWKRkNAZGB4KznVMHUkszhph7I9ypDaOrNXbyyRXRfKg1URVcCXDHHzvwQS4UPcD0E4USJHOOL2ENlgAnl9zwR1qC45WjN4cd0yaPIkd04DVPDHLkSwPDc2FoVP2Mh4pOZWIwxfBAS6QDWORZHmZKupPSXU8OOduN1QTp0UjX5wgvJl78g")
        res.cookie("jwtt",token,{
            maxAge:60000000,
            httpOnly:true,

            
        })

        res.send("YES")
    }
    else
        res.send("NO")
     


    
})
module.exports=router