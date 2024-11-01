import React from 'react'
import { RouterProvider,createBrowserRouter,createRoutesFromChildren,Route} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/Contact'
import Service from './pages/Service'
const Routes = () => {
  const router=createBrowserRouter(createRoutesFromChildren(
   <Route>
     <Route path="/" element={<Home/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/service" element={<Service/>}/>
   </Route>
  ))
  return <RouterProvider router={router} ></RouterProvider>

      
   
  
}

export default Routes
