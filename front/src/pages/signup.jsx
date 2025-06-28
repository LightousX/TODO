import React from 'react'
import Header from '../components/header'
import './signup.css'
import {useState} from 'react'
import axios, {isCancel, AxiosError} from 'axios';

const Signup = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  
  const formData={
  name,
  email,
  password
  }
  const submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/signup",formData,{
      withCredentials: true
    })

    .then((res)=>{if( res.data=="user already exist") {
      window.alert("redirecting to login page")
      window.location.href = '/login'
    } 

    
      if ( res.data=="username not availabel"){
        window.alert("username not availabel")}
      
        // window.location.href = '/signup'
       
      
      if(res.data=="OK") {

        window.alert("redirecting to main page")
        
        window.location.href = '/main'
      }})
    
    
    .then(
      setname(""),
      setemail(""),
      setpassword("")
    )
    // .then()
  .catch((err)=>console.log(err))
   
  }


  return (
    <>
    <Header/>
    <div className='formdiv'>signup

    <form>
      <input type="text" placeholder='Enter your Name' value={name} onChange={(e)=>setname(e.target.value)} />
      <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)} />
      <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)} />
      <button onClick={submit}>
        get signed up
      </button>
    </form>

    </div>
    </>
  )
}

export default Signup