import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Pages/Root/Root.jsx'
import Error from './Pages/Error/Error.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Analytics from './Pages/Analytics/Analytics.jsx'
import History from './Pages/HIstory/History.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/analytics",
        element: <Analytics></Analytics>
      },
      {
        path: "/history",
        element: <History></History>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
