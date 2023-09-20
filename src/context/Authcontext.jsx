import { createContext, useEffect, useState,useContext } from 'react';
import ToastContext from './Toastcontext';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const Authcontextprovider = ({ children }) => {
    const Navigate = useNavigate();
    const { toast }=  useContext(ToastContext)
    const [user ,setUser]=useState(null);
    const [error , setError]=useState(null)

     useEffect(()=>{
      setUser(localStorage.getItem("auth"))
     },[])
  // Define loginUser function that takes userData as an argument
  
  //CURRENT USER
  const currentUser =async()=>{
    try {
      const res = await fetch(`http://localhost:8001/api/user/current`,{
        method:"GET",
        headers:{ Authorization : `Bearer ${localStorage.getItem("auth")}`},
    })
    const userres =await res.json();
    if (!userres.error) {
      setUser(userres)
      Navigate("/home",{replace : true})
    }
    } catch (error) {
      console.log(error)
    }
  }
  
  
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
                  localStorage.setItem("auth", userres.accesstoken);
                  
                  console.log(userres.user)
                  toast.success(`welcome ${userres.user.username}`);
                  
            }else{
                  setError(userres.error);
                  toast.error(userres.error);
            }
            
        } catch (error) {
            console.log(error);
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

                if(!userres.error){
              toast.success("user registered successfully");
              Navigate("/login",{ replace : true })
             
            }else{
              toast.error(userres.error)
              console.log(userres.error)
              setError(userres.error)
            }  
              
                  
} catch (error) {
  
  toast.error("some thing went wrong")
  console.log(error);
   
}


  }

  return (
    <AuthContext.Provider value={{loginUser,RegisterUser , user ,setUser , error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
