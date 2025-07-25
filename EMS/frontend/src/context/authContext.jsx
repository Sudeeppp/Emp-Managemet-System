import React, { createContext, use, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const userContext = createContext()
const authContext = ({children}) =>{
    const [user, setUser] = useState(null);

    const navigate = useNavigate()
    useEffect(() => {
       const verifyUser = async () => {
         try {
           const token = localStorage.getItem("token")
           if (token) {
             const response = await axios.get("http://localhost:3000/api/auth/verify", { headers: { authorization: `Bearer ${token}` } })
             if (response.data.success) {
               setUser(response.data.user)
             }
           }else{
             navigate("/login")
           }
         } catch (error) {
           if (error.response && !error.response.data.error) {
             navigate("/login")
           }
         }
      }
      verifyUser()
    }, []);

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };
  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  )
}

export const useAuth =()=>useContext(userContext)
export default authContext