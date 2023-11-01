import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import MainPage from './Components/MainPage';
import Chefdetails from './Components/Chefdetails/Chefdetails';
import Login from './Components/Login';
import Registration from './Components/Registration';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute';
import NotFound from './Components/NotFound';
import Blog from './Components/Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/chefdetails/:id",
        element: <PrivateRoute><Chefdetails></Chefdetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipies-server-2df3xsme0-rafids-projects.vercel.app/chef/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/blog",
        element: <Blog></Blog> ,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)