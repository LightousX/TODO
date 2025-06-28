import React from 'react'
import Header from '../components/header'
import "./main.css"
import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom';

// import {Redirect} from 'react-router-dom';

import axios, {isCancel, AxiosError} from 'axios';
import Inputbox from '../components/inputbox';

import {useState,useEffect} from 'react'
const Main = () => {
  const [task,settask] = useState("")
  const [visible, setvisible] = useState()
  
  const [idhold, setidhold] = useState("")
  const [gettask,setgettask] = useState([])

  var a=-1;
  var b=false
  



  const getTask= async()=>{
    await axios.get("http://localhost:3000/main",{
      withCredentials: true
    })
    .then( (res)=>{
      console.log(res)
      if(res.data.auth=="W"){

      setgettask(res.data.alltask)}
      else{
      
        window.location.href="/enterance"

      }

    })
    
  }

  useEffect(() => {
    getTask()
    
   axios.get("http://localhost:3000/main",{
      withCredentials: true
    })
    .then( (res)=>{
      if(res.data.auth=="W"){
        var b=true
    
    
  }})}, []
)
  
  

  const HandleClick =(e)=>{
    e.preventDefault()
    a++;
    const taskobj={
      task,
      id:a
    }
    
    axios.post("http://localhost:3000/main",taskobj,{
      withCredentials:true
    })
    .then((res)=>{
      console.log(res)
      getTask()
    })
   .then(settask(""))
  }
  const DeleteTask=(e)=>{
    e.preventDefault()
    window.alert("delete was clicked")
    const temp=e.currentTarget.id
    // console.log(temp)

    axios.delete("http://localhost:3000/main",{
      params:{
        id:temp
      }
    })
    .then((res)=>{
      getTask()
    })

  }

  const UpdateTask=(e)=>{

    e.preventDefault()
    window.alert("submit was clicked")
    setvisible(true)
    const temp=e.currentTarget.id
    setidhold(temp)

    // axios.put("http://localhost:3000/main",{tassk:"hieeeee"},{
    //   params:{
    //     id:temp
    //   }
    // })
    // .then((res)=>getTask())
    
  }
  const logout= async ()=>{
      axios.post("http://localhost:3000/main/log",{},{
        withCredentials:true
      })
      .then(window.alert("atio"))
      .then(window.location.href='/main')
  }


  return (
    
        <>    
        <Header/>
        <button className='logout' onClick={logout}>Logout</button>
    <div className='grand'>
          
        <div className='inputdiv'>
          <input type="text" placeholder='Enter you task....' className='taskenter' value={task} onChange={(e)=>settask(e.target.value)}/>
          <button className='Add' onClick={HandleClick}>Add Task</button> 
      </div>
        <div className='lists'>
        { 
         gettask.map((item)=>{
          a++;
           return(
          
          <p className='eachtask' id={a} key={item._id}><div className='adj'>{item.task}</div>
            <button className='delete' onClick={DeleteTask} id={item._id}>delete task</button>
            <button className='delete' onClick={UpdateTask} id={item._id}>updt task</button>
        </p>)})
        }
      </div>
     
    </div>
    <div className='second'>
      {visible &&<Inputbox tempp={idhold}/>}
    </div>
    
   
    </>


  )}

  


export default Main