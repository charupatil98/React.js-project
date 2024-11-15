import React, { useEffect, useState } from 'react'

const Getdata = () => {
  const [data,setdata]=useState([])
  useEffect(()=>
  getinfo()
  )
  function getinfo(){
    fetch("http://localhost:3000/posts").then((res)=>res.json())
    .then((result)=>setdata(result))
  }
  function delete1(id){
    fetch(`http://localhost:3000/posts/${id}`,{
      method:"DELETE" 
    } )
    getinfo()
  }
  return (
    <>
      <table className="table table-hover" style={{width:"1000px",padding:"30px", marginLeft:'100px',marginTop:"100px",fontSize:"20px",height:"550px",border:"6px solid black"}}>
  <thead>
    <tr>
     
      <th scope="col" style={{backgroundColor:" blue"}}>Title</th>
      <th scope="col" style={{backgroundColor:"green"}}>Date</th>
      <th scope="col" style={{backgroundColor:"blue"}}>Blogs</th>
      <th scope="col" style={{backgroundColor:"green"}}>Action</th>
      <th scope="col" style={{backgroundColor:"blue"}}>Update</th>
      
    </tr>
  </thead>
  <tbody>
    {
      data.map((items)=>
       <tr>
        <td>{items.title}</td>
        <td>{items.date1}</td>
        <td>{items.blog}</td>
       <td> <button onClick={()=>delete1(items.id)}  className='btn btn-danger'>Delete</button></td>
       <td><button className='btn btn-secondary'>Update</button></td>
      
       </tr>
      
      )
    }
  </tbody>
</table>
  
    </>
  )
}
  
  
  


export default Getdata
