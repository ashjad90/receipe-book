import React from "react";
import { useEffect } from "react";
import { useState } from "react";

let AuthContext = React.createContext({
    isLoggedIn:false,
    loginHandler:undefined,
    logoutHandler:undefined
});

export function AuthContextProvider(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
      let isLoggedInValue = localStorage.getItem('isLoggedIn');
      if(isLoggedInValue=='1'){
        setIsLoggedIn(true);
        
      }
  },[]);
  
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  }
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }
  
    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn,loginHandler:loginHandler, logoutHandler:logoutHandler}}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;