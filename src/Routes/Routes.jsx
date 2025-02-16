import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<h1>Error</h1>,
      children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           }
        ]
    },
  ]);

  export default router;