import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    
        <div className="footer">
      <p className='footer_heading'>Follow us on:</p>

      <div className='parent_link'>
        <a href={"https://www.facebook.com/auroraiiitm/" }>
            <FaFacebook className='white_icon'/>
        </a>

        <a href={"https://instagram.com/aurora_iiitm/"}>
            <FaInstagram className='white_icon'/>
        </a>

        <a href={"https://twitter.com/IiitmAurora"}>
            <FaXTwitter className='white_icon'/>
        </a>

        <a href={"https://www.youtube.com/@AuroraIIITGwaliorFest"}>
            <FaYoutube className='white_icon'/>
        </a>
      </div>
    </div>
    
    
  )
}

export default Footer
