import { createContext, useState } from "react";
import { GetUser } from "../util/http";


export const AuthContext = createContext({
    isAuth: false,
    user:null,
    login:()=>{},
    logout:()=>{}

})

 function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (userr) => {
    console.log(`login function user is ${JSON.stringify(userr)}`);
    setUser(userr);
    setIsAuth(true);
    console.log(`login function user ${JSON.stringify(userr)}`);
  };

  const logout = () => {
    setUser(null);
    setIsAuth(false);
  };

  const value = {
    isAuth,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider

