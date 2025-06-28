const express = require('express')
const mongoose = require('mongoose')
var cors=require('cors')
const taskSchema=require("./Models/taskModels")
const signrouter=require('./Routes/Routes')
const loginroute=require('./Routes/loginroute')
const mainroute=require('./Routes/mainroute')
var cookieParser=require("cookie-parser")
var jwt = require('jsonwebtoken');
const app = express()
const port = 3000

const connectDB =async()=>{
    try {
       await mongoose.connect('mongodb+srv://shivasharmanitb:npn4lA3cGVRYMS0H@crudshiva.dtwbvrf.mongodb.net/');
         console.log("db connected");
    } catch (error) {
        console.log("db connection error")
    }
}
app.use(cors({credentials:true,origin:"http://localhost:5173"}));
app.use(express.json())
// app.options('*', cors())
app.use(cookieParser())
app.use('/', signrouter)
app.use('/', loginroute)
app.use('/', mainroute) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/main',async (req,res)=>{
  if(req.cookies.jwtt){
     const link=req.cookies.jwtt

        const linkdecoded=jwt.verify(link,'9oZJszXg4xsUOxY5m89cWh81Kvtip2ddTlUKbHNt1qhj5w5nHzoWiRzHWccmWUB54sv3ibedboowqQJIGncEhAnzzyoN50c9CUMZI8W1CoBhaFHgdV0RoRbqRESzUDMvOeXQGuLWiF9XqYBWKRkNAZGB4KznVMHUkszhph7I9ypDaOrNXbyyRXRfKg1URVcCXDHHzvwQS4UPcD0E4USJHOOL2ENlgAnl9zwR1qC45WjN4cd0yaPIkd04DVPDHLkSwPDc2FoVP2Mh4pOZWIwxfBAS6QDWORZHmZKupPSXU8OOduN1QTp0UjX5wgvJl78g')
      const queryy=linkdecoded.name
  const alltask=await taskSchema.find({name:queryy})
  
  res.json({
    auth:"W",
    alltask
  })
  
  }
  else{
    res.send("not logged in")
  }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB()
})