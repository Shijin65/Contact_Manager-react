import React from 'react'
import "./addContact.css"
function AddContact() {
  return (
    <div className='formcontainer'>
      <form className='form'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"></input>
          <br/>
          <label htmlFor="Number">Number:</label>
          <input type="number" id="Number" name="Number"></input>
          <button type="submit">ADD CONTACT</button>
      </form>
    </div>
  )
}

export default AddContact