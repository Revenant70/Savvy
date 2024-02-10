import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Auth from './components/Auth.jsx'
import Chats from './components/Chats.jsx'
import SignUp from './components/SignUp.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './components/Body.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
      
  },
  {
    path: "/body",
    element: <Body />
  },
  {
    path: "/Chats",
    element: <Chats />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
