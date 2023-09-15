import { useState,useEffect} from 'react'
import Header from './Header/Header'
import AddContact from './AddContact/AddContact';
import './App.css'
import ContactLIst from './ContactList/ContactLIst';

function App() {
  const [contacts, setcontacts] = useState([]);
  const addcontactHandler=(contact)=>{
    setcontacts([...contacts,contact] )
  }
  const KEY="shijincht65"

  useEffect(()=>{
    const takenitem = JSON.parse(localStorage.getItem(KEY));
    if (takenitem) {setcontacts(takenitem);}
    },[])


useEffect(()=>{
localStorage.setItem(KEY,JSON.stringify(contacts));
},[contacts])
  return ( 
    <div className='maindiv'>
      <Header/>
    <AddContact addcontactHandler={addcontactHandler}/>
    <ContactLIst  contacts ={contacts}/>
    </div>
  )
}

export default App
