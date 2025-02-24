import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import { Coffee } from './Coffee.jsx'
import { Blogs } from './Blogs.jsx'
import { Contact } from './Contact.jsx'
import { Footer } from './Footer.jsx'
import { Navbar } from './Navbar.jsx'
import { Home } from '../Home.jsx'

export const Routers = (() =>{
    const Router =createBrowserRouter([
      {
          path:"/",
          element:<Applayout />,
          children:[
              {
                  path:"/",
                  element:<Home />
             
                  },
                  {
                     path:"/Coffee",
                     element:<Coffee/>
                
                     },
             
             
                     {
                         path:"/Blogs",
                         element:<Blogs />
                    
                         },
             
                         {
                             path:"/Contact",
                             element:<Contact />
                        
                             },
          ]
      },
    ])
  return <RouterProvider router={Router}/>
  })
  const Applayout=(()=>{
  return(
  <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
  )
  })