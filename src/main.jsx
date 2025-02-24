import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routers } from "./Routers.jsx";
// import { Navbar } from './Navbar.jsx'
// import { Hero } from './Hero.jsx'
// import { Coffee } from './Coffee.jsx'
// import { Blogs } from './Blogs.jsx'
// import { Contact } from './Contact.jsx'
// import { Footer } from './Footer.Jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar/>
    <Hero />
    <Coffee />
    <Blogs />
    <Contact /> 
    <Footer /> */}
    <Routers />
  </StrictMode>,
)
