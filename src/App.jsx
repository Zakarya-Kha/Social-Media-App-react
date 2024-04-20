import { useState } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <>  <Home /> </>
  },
  {
    path: '/profile',
    element: <> <Profile /> </>
  },
  {
    path: '/login',
    element: <> <Navbar/> <Login /> </>
  },
  {
    path: '/register',
    element: <> <Navbar/> <Register /> </>
  }
])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
