import React from 'react'
import Welcome from './pages/Welcome'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Welcome/>
    },
     {
      path:"/signin",
      element:<SignIn/>
    },
     {
      path:"/signup",
      element:<SignUp/>
    },
  ])
  return <RouterProvider router={router}/>
}

export default App
