const express = require('express')
const mongoose = require('mongoose')
const router = express.Router({ mergeParams: true })
const taskSchema = require("../Models/taskModels")
var jwt = require('jsonwebtoken');
var cookieParser=require=("cookie-parser")

router.post("/main", async (req, res) => {
    const link=req.cookies.jwtt
    console.log(link)
    const linkdecoded=jwt.verify(link,'9oZJszXg4xsUOxY5m89cWh81Kvtip2ddTlUKbHNt1qhj5w5nHzoWiRzHWccmWUB54sv3ibedboowqQJIGncEhAnzzyoN50c9CUMZI8W1CoBhaFHgdV0RoRbqRESzUDMvOeXQGuLWiF9XqYBWKRkNAZGB4KznVMHUkszhph7I9ypDaOrNXbyyRXRfKg1URVcCXDHHzvwQS4UPcD0E4USJHOOL2ENlgAnl9zwR1qC45WjN4cd0yaPIkd04DVPDHLkSwPDc2FoVP2Mh4pOZWIwxfBAS6QDWORZHmZKupPSXU8OOduN1QTp0UjX5wgvJl78g')
    console.log(linkdecoded)
    const tasks = req.body
    const finalTask={
        task:tasks.task,
        id:tasks.id,
        name:linkdecoded.name
    }
    const newtask = new taskSchema(finalTask)
    const addedtask = await newtask.save()
    res.status(200).send("OK")


})

router.put("/main", async (req, res) => {
    const param = req.query
    const shiva=req.body
    const ansh=shiva.updttask
    const paramid = param.id
    console.log(paramid)
    console.log("shia")

    const taskput = await taskSchema.findOneAndUpdate({ _id: paramid }, { task: ansh })
    res.send("OK")





})

router.delete("/main",async(req,res)=>{
    const strid=req.query
    const reqidfromfront=strid.id
    const deltask= await taskSchema.deleteOne({_id: reqidfromfront})
    res.send("OK")
})
router.post("/main/log",async(req,res)=>{
    res.clearCookie(("jwtt"))
    res.send()
})

module.exports = router