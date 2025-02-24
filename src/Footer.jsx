import "./Footer.css"
import { IoLogoTwitter } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () =>{
    return(
        <>
        <div className="div">
            <h1 id="q"> COFFEE</h1>
       
        <div className="kaa">
            <div className="kaaa">
                <h4>ABOUT US</h4>
                <p>Company</p>
                <p>Community</p>
                <p>Careers</p>
            </div>
            <div className="kaaa">
                <h4>BLOGS</h4>
                <p>Tech</p>
                <p>Music</p>
                <p>Video</p>
                <p>Image</p>
            </div>
            <div className="kaaa">
                <h4>SERVICES</h4>
                <p>Shop</p>
                <p>Order</p>
                <p>Menu</p>
            </div>
            <div className="kaaa">
                <h4>SOCIAL MEDIA</h4>
                <p className="ooo"><IoLogoTwitter />   <SiFacebook />  <FaInstagramSquare />  <FaLinkedin /></p>
            </div>
        </div>
        </div>

        </>
    )
}