import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/main";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [ 
        {
        path: "/", 
        element: <Home></Home>
      }, {
        path: "/registration",
        element: <Registration></Registration>
      }
    ]
    },
  ]);

  export default router