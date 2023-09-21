import React, { useEffect, useState } from 'react'

function ShowContact() {
 
    useEffect(()=>{
        getContact
    })
  const getContact = async()=>{
    try {
        const res = await fetch(`http://localhost:8001/api/contact`,{
        method:"GET",
        headers:{ Authorization : `Bearer ${localStorage.getItem("auth")}`},
    })
    const userres = await res.json();
    console.log(userres)
    } catch (error) {
        console.log(error)
    }
    
  }
  return (
    
    <div className="container">
    <h1>Contact List</h1>
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">Phone: 123-456-7890</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Jane Smith</h5>
                    <p className="card-text">Phone: 987-654-3210</p>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default ShowContact