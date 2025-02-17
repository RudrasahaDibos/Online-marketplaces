import { useContext } from "react";
import { AuthContext } from "./AuthProvider";



const UseAuth = () => {
    const Context = useContext(AuthContext)
    return Context
};

export default UseAuth;