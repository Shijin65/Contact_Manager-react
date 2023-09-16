import React , { useState }from 'react'
import { Link } from 'react-router-dom'


function Login() {

    const [userdata,setuserdata] = useState({
        email:"",
        password:""
})

const handleData =(event)=>{
    const {name,value} = event.target;
    setuserdata({...userdata , [name] :value }) 
}


const handleSubmit=(event)=>{
    event.preventDefault();
    setuserdata({email:"",password:""})

}


  return (
  <div class='w-50 align-self-center'><form onSubmit={handleSubmit}>
     <div >

    <h2 class='mt-5 text-center'>LOGIN USER</h2>
    <div class="form-group">
      <label for="Email" class="col-sm-2 form-label mt-4">Email address</label>
      <input type="email" 
      class="form-control" 
      id="Email" 
      name='email'
      aria-describedby="emailHelp" 
      placeholder="Enter email" 
      required 
      value={userdata.email}
      onChange={handleData}
      />
    </div>


    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" 
      class="form-control" 
      id="exampleInputPassword1" 
      name='password'
      placeholder="Password" 
      autoComplete="off" 
      required 
      value={userdata.password}
      onChange={handleData}/>
    </div>
    <p class="mt-2">Don't have an account? <Link to='/register'>Register</Link></p>
    <button type="submit" class="btn btn-outline-success mt-3">Login</button>
    <button type="button" class="btn btn-outline-danger mt-3 ms-2" onClick={() => {}}>Clear</button>
  </div>
  </form>
  </div>
  )
}

export default Login