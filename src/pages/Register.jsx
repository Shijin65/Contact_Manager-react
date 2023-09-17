import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Regiester() {
    const [state ,setstate]=useState(false)
    const [userData, setuserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword:""
    })

    const handleData = (event) => {
        // console.log(event.target)
        const { name , value } = event.target;
        setstate(false)
        setuserData({ ...userData, [name] : value })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData.password)
        if (userData.password === userData.confirmpassword) {
            setuserData({username:"",email:"",password:"",confirmpassword:""})
            
            alert("the data submitted succesfully")

        }else{
            setstate(true)
        }
      console.log(event.target)
    }

    return (
        <div class='w-50  align-self-center'><div>
            <h2 class='mt-5 text-center'>Register Here</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-group ">
                    <label for="Username" class="col-sm-2 form-label mt-4 ">Username</label>
                    <input type="text" 
                    class="form-control" 
                    id="username" 
                    name='username'
                    placeholder="Enter email"
                    value={userData.username}
                    onChange={handleData} 
                    required/>
                </div>


                <div class="form-group ">
                    <label for="Email" class="col-sm-2 form-label mt-4 ">Email address</label>
                    <input type="email" 
                    class="form-control" 
                    id="email" 
                    name="email"
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"
                        value={userData.email}
                        onChange={handleData}
                        required />
                </div>


                <div class="form-group">
                    <label for="Password" class="form-label mt-4">Password</label>
                    <input type="password" 
                    class="form-control" 
                    id="Password" 
                    name='password'
                    placeholder="Password" 
                    autocomplete="off"
                        value={userData.password}
                        onChange={handleData} 
                        required/>
                </div>


                <div class="form-group ">
                    <label for="CPassword" class="form-label mt-4"> Confirm Password</label>
                    <input type="password" 
                    class = "form-control"
                    id="confirmpassword" 
                    name='confirmpassword'
                    placeholder="confirm Password" 
                    autocomplete="off"
                    value={userData.confirmpassword}
                    onChange={handleData} 
                    required/>
                    {state ? <div class="text-danger"> The password not match. Try again?</div>:""}
                </div>
                

                <p class="mt-2">Already Have a account?..<Link to='/login'>login</Link></p>
                <button type="submit" class="btn btn-outline-success mt-4 ">Create</button>
                <button type="button" class="btn btn-outline-danger mt-4 ms-2" onClick={() => { }}>Clear</button>
            </form> </div>

        </div >



    )
}

export default Regiester