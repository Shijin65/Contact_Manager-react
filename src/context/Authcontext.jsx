import { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const Authcontextprovider = ({ children }) => {

    const [user ,setUser]=useState(null);
     
  // Define loginUser function that takes userData as an argument
  const loginUser = async(userData) => {

        console.log(userData)

        try {
            const res = await fetch(`http://localhost:8001/api/user/login`,{
                method:"POST",
                headers:{"content-type":"application/json",
            },
            body : JSON.stringify(userData),
            })
            const userres =await res.json();
            console.log(userres)
        } catch (error) {
            console.log(error)
        }

    // try {
    //   console.log(JSON.stringify({...userData}))
    //   axios.post('http://localhost:8001/api/user/login',JSON.stringify({...userData}), { withCredentials: true,
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }



  };
  // Provide the loginUser function in the context value

  return (
    <AuthContext.Provider value={{loginUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
