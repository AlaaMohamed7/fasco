import { createContext, useContext, useState } from "react";

export const ValidationConext = createContext(null)

const ValidationContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const logged = (user) => {
        setUser(user)
    }
    const logout = () =>{
        setUser('')
    }
    return(
        <ValidationConext.Provider value={{logged,logout,user}}>
            {children}
        </ValidationConext.Provider>
    )

}

export default ValidationContextProvider

export const useValid = () => {
    return useContext(ValidationConext)
}