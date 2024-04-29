import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from './Products.jsx'
import Pricing from './Pricing.jsx'
import About from './About.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  
  {
    path: "/Products",
    element: <Products/>
  },
  {
    path: "/Pricing",
    element: <Pricing/>
  },
  {
    path: "/About",
    element: <About/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
