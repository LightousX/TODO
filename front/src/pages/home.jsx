import React from 'react'
import Header from '../components/header'
import './home2.css'
import {useState,useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";

const Home = () => {

 const [chek, setchek] = useState(false)
 if(chek==false){
  return (
    <>
    <Header/>
    <div className='mainnn'> 

      <div className='headinggg'>
        <div className="head"><h1>WELCOME TO MY CRUD APP</h1></div>
      
            <div className="b1">
            New User ? <Link to='/signup'><button className=''>Sign up here</button></Link>
              </div> 
            <div className= 'b2'>Existing User ? <Link to='/login'><button>Login here</button></Link></div>
        </div>   
     </div>
  
    </>
  )}
  else{
    {window.location.href="/main"}
  }
}

export default Home 