// import { useState,useEffect} from 'react'
// import Header from './Header/Header'
import Layout from './Components/Layout/Layout'
import './App.css'
import { Routes as Switch,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Authcontextprovider } from './context/Authcontext'
import { ToastContextProvider } from './context/Toastcontext'


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
  <ToastContextProvider> 
    <Authcontextprovider>
      
    <Layout/>
    <div className='maindiv' >
       <Switch>
        <Route path='/home' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register}/>
      </Switch>
    </div>
    
    </Authcontextprovider>
    </ToastContextProvider>
  )
}

export default App

  //   <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-black text-white-50">
  //   <div class="container text-center">
  //     <small>Copyright &copy; Contact Manager App</small>
  //   </div>
  // </footer>