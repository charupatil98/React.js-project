import React, { useState } from 'react'
import './Style.css';

const Services = () => {
const[title,settitle]=useState()
const[date1,setdate1]=useState()
const[blog,setblog]=useState()
function postdata(){
    const data={title,date1,blog}
    fetch("http://localhost:3000/posts",{
      method:"POST",
      headers:{
        'Accept':"application/json",
        'Content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
}
  return (
    <>
    <div id='container'>
      <form>
        Enter Title:<br></br>
        <input type="text" onChange={(t)=>settitle(t.target.value)} /><br></br><br></br>
        Enter Date:<br></br>

        <input type="date" onChange={(d1)=>setdate1(d1.target.value)} /><br></br><br></br>
        Enter a Message:<br></br>

        <textarea placeholder='Type here' onChange={(b)=>setblog(b.target.value)}>
        </textarea><br></br><br></br>
        
        <button onClick={postdata} className='btn btn-secondary'>Submit</button>

      </form>

    </div>
      
    </>
  )
}

export default Services
