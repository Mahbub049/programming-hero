import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Phones from './components/Phones';
import Phone from './components/Phone';
import Root from './components/Root';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: ()=> fetch('http://localhost:3213/phones')
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:3213/phones/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
