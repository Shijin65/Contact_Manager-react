import React from "react";
import "./addContact.css";
class AddContact extends React.Component {
  state = {
    name: "",
    number: "",
  };

  add =(e)=>{
    // e.stopPropagation()
    e.preventDefault();
    if (this.state.name === ""  || this.state.email==="") {
      alert("all fields are mantatory")
      return;
    }
    this.props.addcontactHandler(this.state);
   
    this.setState({name:"",number:""})
    
  }
  render(){
    return (
    <div className="formcontainer">
      <form className="form" onSubmit={this.add}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"
          value={this.state.name}
          onChange={(e)=> this.setState({name:e.target.value})}
        ></input>
        <br/>
        <label htmlFor="Number">Number:</label>
        <input type="number" id="Number" name="Number" 
        value={this.state.number}
        onChange={(e)=>this.setState({number:e.target.value})}></input>
        
        <button type="submit">ADD CONTACT</button>
      </form>
    </div>
  );
  }
  
}

export default AddContact;
