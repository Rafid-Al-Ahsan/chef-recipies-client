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
        element: <Chefdetails></Chefdetails>,
        loader: ({params}) => fetch(`http://localhost:5001/chef/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
