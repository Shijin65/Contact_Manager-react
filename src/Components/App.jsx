import { useState } from 'react'
import Header from './Header/Header'
import AddContact from './AddContact/AddContact';
import './App.css'
import ContactLIst from './ContactList/ContactLIst';

function App() {
  const [contacts, setcontacts] = useState([]);
  const addcontactHandler=(contact)=>{
    setcontacts([...contacts,contact] )
  }

//   const contacts =[
//     {
//     id:1,
//     "name":"shijin",
//     "number":"8848217507"
//     },
//     {
//       id:2,
//       "name":"haseeb",
//       "number":"807"
//       },
//       {
//         id:3,
//         "name":"ajin",
//         "number":"7025"
//         }
// ]
  return (
    <div className='maindiv'>
      <Header/>
    <AddContact addcontactHandler={addcontactHandler}/>
    <ContactLIst  contacts ={contacts}/>
    </div>
  )
}

export default App
