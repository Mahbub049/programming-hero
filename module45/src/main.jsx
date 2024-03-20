import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Users from './Components/Users/Users';
import About from './Components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{
      path: "/users",
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>
    },
    {
      path: "/about",
      element: <About></About>
    }
  ]
  },
  {
    path: "/about",
    element: <div>I am Mahbub</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
