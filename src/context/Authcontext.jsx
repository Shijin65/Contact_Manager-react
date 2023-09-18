import {Children, createContext, useState} from 'react';
import axios from 'axios';

const Authcontext = createContext()
export const Authcontextprovider = ({children})=>{
    const [user ,setUser] =useState(null);
    
//login user
const loginUser = async()=>{

    try {

        axios.get(`http://localhost:5000/api/user/login`).then((respoonce)={
            console
        })

    //     const res = await fetch(`http://localhost:5000/api/user/login`,
    //     {   method:"POST",
    //         headers:{"content-Type":"application/json"},
    //         body : JSON.stringify({...userData})
    // })
    //     const user=await res.json();
    //     console.log(user)
    } catch (error) {
        console.log( error)
    }
}

    



    return<Authcontextprovider value={{loginUser}}>{children}</Authcontextprovider>
}

export default Authcontext;