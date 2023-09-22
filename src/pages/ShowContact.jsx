import React, { useContext,useEffect, useState } from 'react'
import ToastContext from '../context/Toastcontext';
// import {useNavigate } from 'react-router-dom'

function ShowContact() {
    const { toast } = useContext(ToastContext)
    const [Contacts ,setContacts]=useState([]);
    // const Navigate =useNavigate()
    useEffect(() => {
        fetchData()

        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:8001/api/contact`, {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${localStorage.getItem("auth")}` },
                })
                const userres = await res.json();
                console.log(userres)
                setContacts(userres)
                if(userres == []){
                    toast.error("No Contacts Created")
                    Navigate("/home",{replace :true})
                }
            } catch (error) {

            }
        }
    })

    return (

        <div className="container">
            <h1>Contact List</h1>
            <div className="row">

            {Contacts.map((contact)=>{
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{contact.name}</h5>
                            <p className="card-text">{}</p>
                        </div>
                    </div>
                </div>
            })}
                


                {/* <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Jane Smith</h5>
                            <p className="card-text">Phone: 987-654-3210</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default ShowContact