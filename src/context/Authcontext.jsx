import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const Authcontextprovider = ({ children }) => {

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
              console.log(userres)
            
            

            if (userres.title === "BAD REQUEST") {
              console.log(userres.error)
            }else{
              setUser(userres);
              localStorage.setItem("auth", userres)
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

            
} catch (error) {
  console.log(error)
}


  }

  return (
    <AuthContext.Provider value={{loginUser,RegisterUser , user ,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
