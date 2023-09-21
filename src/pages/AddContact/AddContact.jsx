
import { Link } from 'react-router-dom'

function AddContact() {


  return (

    <> 
      

      <form action="">
        <div class='w-50 position-absolute top-50 start-50 translate-middle'>
          <h2 class=' text-center'>Add Contact</h2>

          <div class="form-group">
            <label for="Email" class="col-sm-2 form-label mt-4">Name</label>
            <input 
                  type="email" 
                  class="form-control" 
                  id="Email" 
                  aria-describedby="emailHelp" 
                  autoComplete='on'
                  placeholder="Enter email"
                  />
          </div>


          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
            <input 
                  type="password" 
                  class="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Password" 
                  autoComplete="off" />
          </div>
          <p class="mt-2">Don't have an account? <Link to='/register'>Register</Link></p>
          <button type="submit" class="btn btn-outline-success mt-3">Login</button>
          <button type="button" class="btn btn-outline-danger mt-3 ms-2" onClick={() => { }}>Clear</button>
        </div>
      </form></>
  )
}

export default AddContact


// import "./addContact.css";


 

  // add =(e)=>{
  //   e.preventDefault();
  //   if (this.state.name === ""  || this.state.email==="") {
  //     alert("all fields are mantatory")
  //     return;
  //   }
  //   this.props.addcontactHandler(this.state);
   
  //   this.setState({name:"",number:""})
  // }
 


      // onSubmit={this.add}
      // onChange={(e)=> this.setState({name:e.target.value})}
      // value={this.state.number}
      //   onChange={(e)=>this.setState({number:e.target.value})}

     
    
    // <div class="align-self-center" className="formcontainer ">
    //   <form className="form" onSubmit={this.add}>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" name="name"
    //       value={this.state.name}
    //       onChange={(e)=> this.setState({name:e.target.value})}
    //     ></input>
    //     <br/>
    //     <label htmlFor="Number">Number:</label>
    //     <input type="number" id="Number" name="Number" 
    //     value={this.state.number}
    //     onChange={(e)=>this.setState({number:e.target.value})}></input>
        
    //     <button type="submit">ADD CONTACT</button>
    //   </form>
    // </div>
  
  
  


