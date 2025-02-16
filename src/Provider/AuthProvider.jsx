import { createContext, useState } from "react";

const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user ,setuser] =useState(null)
  const [loading,setloading] = useState(true)
  

    const authInfo={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;