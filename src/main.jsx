import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import Error from './components/Error.jsx';
import Contact from './components/Contact.jsx';
const appRouter = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
  },
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>
  },
  {
    element: <AboutUs/>,
    path:"/about",
  },
  {
    element: <Contact/>,
    path:"/contact",
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
