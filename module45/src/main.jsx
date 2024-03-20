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
import UserDetails from './Components/UserDetails/UserDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/Post Details/PostDetails';

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
    },
    {
      path: "/user/:userId",
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetails></UserDetails>
    },
    {
      path: '/posts',
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    },
    {
      path: '/post/:postId',
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element: <PostDetails></PostDetails>
    }
  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
