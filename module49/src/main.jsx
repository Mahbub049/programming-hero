import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
