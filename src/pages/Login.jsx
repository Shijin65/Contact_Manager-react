import React , { useState,useContext }from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../context/Authcontext'


function Login() {
  const{ loginUser }= useContext(Authcontext)

    const [userData,setuserdata] = useState({
        email:"",
        password:""
})

const handleData =(event)=>{
    const {name,value} = event.target;
    setuserdata({...userData , [name] :value }) 
}

  
const handleSubmit=(event)=>{
    event.preventDefault();
    // setuserdata({email:"",password:""})
    loginUser(userData)
}


  return (
  <div className=''><form onSubmit={handleSubmit}>
     <div >

    <h2 className='mt-5 text-center'>LOGIN USER</h2>
    <div className="form-group">
      <label htmlFor="Email" className="col-sm-2 form-label mt-4">Email address</label>
      <input type="email" 
      className="form-control" 
      id="Email" 
      name='email'
      aria-describedby="emailHelp" 
      placeholder="Enter email" 
      required 
      value={userData.email}
      onChange={handleData}
      />
    </div>


    <div className="form-group">
      <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
      <input type="password" 
      className="form-control" 
      id="exampleInputPassword1" 
      name='password'
      placeholder="Password" 
      autoComplete="off" 
      required 
      value={userData.password}
      onChange={handleData}/>
    </div>
    <p className="mt-2">Don't have an account? <Link to='/register'>Register</Link></p>
    <button type="submit" className="btn btn-outline-success mt-3">Login</button>
    <button type="button" className="btn btn-outline-danger mt-3 ms-2" onClick={() => {}}>Clear</button>
  </div>
  </form>
  </div>
  )
}

export default Login