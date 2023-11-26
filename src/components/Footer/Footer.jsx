import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    
        <div className="footer">
      <p className='footer_heading'>Follow us on:</p>

      <div className='parent_link'>
        <a href={"https://www.facebook.com/auroraiiitm/"}>
            <FaFacebook/>
        </a>

        <a href={"https://instagram.com/aurora_iiitm/"}>
            <FaInstagram/>
        </a>

        <a href={"https://twitter.com/IiitmAurora"}>
            <FaTwitter/>
        </a>

        <a href={"https://www.youtube.com/@AuroraIIITGwaliorFest"}>
            <FaYoutube/>
        </a>
      </div>
    </div>
    
    
  )
}

export default Footer
