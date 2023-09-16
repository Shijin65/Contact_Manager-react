// import { useState,useEffect} from 'react'
// import Header from './Header/Header'
import Layout from './Components/Layout/Layout'
import './App.css'
import { Routes as Switch,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {

  // const [contacts, setcontacts] = useState([]);
  // const addcontactHandler=(contact)=>{
  //   setcontacts([...contacts,contact] )
  // }
  // const KEY="shijincht65"
// useEffect(()=>{
// localStorage.setItem(KEY,JSON.stringify(contacts));
// },[contacts])

  return ( 
    <div><Layout/>
    <div className='maindiv'>
      
      <Switch>
        <Route path='/home' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register}/>
      </Switch>
      
    </div></div>
  )
}

export default App
