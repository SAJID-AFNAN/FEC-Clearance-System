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
import Cse from './Pages/Apply/CSE/Cse'
import Eee from './Pages/Apply/EEE/Eee'
import Civil from './Pages/Apply/Civil/Civil'
import NonTech from './Pages/Apply/NonTech/NonTech'
import Academic from './Pages/Apply/Academic/Academic'
import Error from './Pages/Error/Error'
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp'
import AuthProvider from './Providers/AuthProvider'

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
      },
      {
        path: "/cse",
        element: <Cse></Cse>
      },
      {
        path: "/eee",
        element: <Eee></Eee>
      },
      {
        path: "/civil",
        element: <Civil></Civil>
      },
      {
        path: "/ntech",
        element: <NonTech></NonTech>
      },
      {
        path: "/academic",
        element: <Academic></Academic>
      }
    ]
  },
  {
    path: "/error",
    element: <Error></Error>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
