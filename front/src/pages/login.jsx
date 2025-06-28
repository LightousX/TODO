import React from 'react'
import Header from '../components/header'
import './login.css'
import {useState} from 'react'
import axios, {isCancel, AxiosError} from 'axios';

const Login = () => {

  const [email, setnemail] = useState("")
  const [password, setpassword] = useState("")
  const formData={
    email,
    password
  }
  const submit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:3000/login",formData,{
        withCredentials:true
      })
      .then((res)=>{
        if(res.data=="YES"){
          window.location.href="/main"
        }
        else{
          window.alert("wrong credentials")
        }
      })
  }

  return (<>
    <Header/>
    <div className='logindiv'>
      <form>
    <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setnemail(e.target.value)} />
    <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)} />
    <button onClick={submit}>
        login
      </button>
    </form>
    </div>
    </>
  )
}

export default Login