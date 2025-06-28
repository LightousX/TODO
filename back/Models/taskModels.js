const mongoose=require('mongoose')

const taskSchema= new mongoose.Schema({
task:{
    type:String,
    required:true
},
id:{
    type:Number,
    required:true
},

name:{
    type:String,
    required:true
}
})

module.exports= mongoose.model("taskSchema",taskSchema)