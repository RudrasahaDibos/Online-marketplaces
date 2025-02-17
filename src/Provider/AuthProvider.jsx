import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user ,setuser] =useState(null)
  const [loading,setloading] = useState(true)

  const Createuser =(email,password)=>{
  setloading(true)
   return createUserWithEmailAndPassword(auth, email, password)
  }
  const SignUser =(email,password)=>{
     setloading(true)
     return   signInWithEmailAndPassword(auth,email,password)
  }

  const logout =()=>{
     setloading(true)
     return signOut(auth)
  }
  

//   Observerd
useEffect(()=>{
       const UnSubcriptions = onAuthStateChanged(auth,Currentuser=>{
           setuser(Currentuser)
           console.log("Currentuser",Currentuser)
            setloading(false)
           return  ()=>{
              return  UnSubcriptions()
       
           }
})       
},[])

    const authInfo={
         user,
         Createuser,
         SignUser,
         loading,
         logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;