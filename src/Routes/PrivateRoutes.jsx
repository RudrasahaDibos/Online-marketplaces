import { Navigate } from "react-router-dom";
import UseAuth from "../Provider/UseAuth";
import Loading from "../Components/Loading";



const PrivateRoutes = ({children}) => {
    const {user,loading} =UseAuth()
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }

    return <Navigate to='/login'></Navigate>
}

export default PrivateRoutes;