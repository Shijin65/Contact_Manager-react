import { createContext, useEffect, useState,useContext } from 'react';
import ToastContext from './Toastcontext';

const AuthContext = createContext();

export const Authcontextprovider = ({ children }) => {
    const { toast }=  useContext(ToastContext)
    const [user ,setUser]=useState(null);
     useEffect(()=>{
      setUser(localStorage.getItem("auth"))
     },[])
  // Define loginUser function that takes userData as an argument
  //LOGIN USER ..........

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

            if (!userres.error) {
                  setUser(userres);
                  localStorage.setItem("auth", userres)
                  toast.success("login success full")

            }else{
                  toast.error(userres.error)
            }

        } catch (error) {
            console.log(error)
        }
  };
 

  //REGISTER USER

  const RegisterUser = async(userData)=>{
// console.log(userData)
try {
  const res = await fetch(`http://localhost:8001/api/user/register`,{
                method:"POST",
                headers:{"content-type":"application/json",
            },
            body : JSON.stringify(userData),
            })
            const userres =await res.json();
            console.log(userres)
            toast.error();
            
} catch (error) {
 
  console.log(error);
   
}


  }

  return (
    <AuthContext.Provider value={{loginUser,RegisterUser , user ,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
