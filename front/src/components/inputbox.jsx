import React from 'react'
import "./inputbox.css"
import axios, {isCancel, AxiosError} from 'axios';
import {useState,useEffect} from 'react'
const Inputbox = (tempp) => {
    const [updtTask, setupdtTask] = useState("")
    const HandleClick=()=>{
        const reTask={
            updttask:updtTask
        }
        // console.log(tempp)

        axios.put("http://localhost:3000/main",reTask,{
            params:{
              id:tempp.tempp
            }
          })
          .then((res)=>{
            window.location.replace(location)
          })
          
    }    
  return (
    <>
            <div className='inpbox'>
                <div className='heading'>Enter the updated task</div>
                <div className='taskval'><input type="text" className='inval'  value={updtTask} onChange={(e)=>{setupdtTask(e.target.value)}}/></div>
                <button className='submit' onClick={HandleClick}>Submit</button>
            </div>
    </>
  )
}

export default Inputbox 