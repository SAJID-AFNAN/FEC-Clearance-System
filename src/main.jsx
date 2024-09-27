import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root'
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import Inbox from './Pages/Inbox/Inbox'
import Profile from './Pages/Profile/Profile'
import Settings from './Pages/Settings/Settings'
import Apply from './Pages/Apply/Apply'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/inbox",
        element: <Inbox></Inbox>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/settings",
        element: <Settings></Settings>
      },
      {
        path: "/apply",
        element: <Apply></Apply>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
