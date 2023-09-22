import react,{ useContext, useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom'
import AuthContext from '../context/Authcontext';
import ToastContext from '../context/Toastcontext';


function CreateContact() {
  const { toast } = useContext(ToastContext)
  const [ContactDetails, setContactDetails] = useState({
    name: "",
    phone: "",
    email: "",
})
  const {user}=useContext(AuthContext);
const Navigate =useNavigate()

useEffect(()=>{
  !user && Navigate("/login",{replace:true})

})
const handlechange=(event)=>{

  const { name , value } = event.target;
  setContactDetails({ ...ContactDetails, [name] : value })
}
const handleSubmit = async(event) => {
  event.preventDefault();
  const res = await fetch(`http://localhost:8001/api/contact`,{
                method:"POST",
                headers:{"content-type":"application/json",
                Authorization : `Bearer ${localStorage.getItem("auth")}`
            },
            body : JSON.stringify(ContactDetails),
            })
            const userres =await res.json();

          if(!userres.error){
              toast.success("the contact created successfully")
              setContactDetails({ 
            name: "",
              phone: "",
              email: "",})
          }else{
            toast.error(userres.error)
          }
}

  return (

    <> 
      <form onSubmit={handleSubmit}>
        <div className='w-50 position-absolute top-50 start-50 translate-middle'>
          <h2 className=' text-center'>Add Contact</h2>

          <div className="form-group">
            <label htmlFor="name" className="col-sm-2 form-label mt-4">Name</label>
            <input 
                  type="name" 
                  className="form-control" 
                  id="name" 
                  name='name'
                  aria-describedby="nameHelp" 
                  autoComplete='on'
                  value={ContactDetails.name}
                  placeholder="Enter name"
                  onChange={handlechange}
                  />
          </div>


          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">Email</label>
            <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name='email'
                  placeholder="email"
                  value={ContactDetails.email} 
                  autoComplete="on"
                  onChange={handlechange} />
          </div>
          <div className="form-group">
            <label htmlFor="Phone" className="form-label mt-4">Phone number</label>
            <input 
                  type="Phone" 
                  className="form-control" 
                  id="Phone" 
                  name='phone'
                  placeholder="Phone"
                  value={ContactDetails.phone}
                  autoComplete="on" 
                  onChange={handlechange}/>
          </div>
          
          <button type="submit" className="btn btn-outline-success mt-3">ADD CONTACT</button>
          <button type="button" className="btn btn-outline-danger mt-3 ms-2" onClick={() => {}}>Clear</button>
        </div>
      </form></>
  )
}

export default CreateContact;