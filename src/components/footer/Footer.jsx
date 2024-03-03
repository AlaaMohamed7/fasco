import React from 'react'
import footerLogo from '../assets/logo_big.png'
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import Container from 'react-bootstrap/esm/Container'

function Footer() {
  return (
    <Container>
    <div className='footer'>
        <div className='upperLine'>
          
        </div>
        <div className='footerLogo d-flex align-items-center '>   
            <h1>Fasco</h1>
        </div>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footerSocialIcons'>
            <FaInstagram />
            <FaPinterest />
            <SiWhatsapp />
        </div>
    </div>
    <hr />
    <p className="text-center">Copyright @ 2023 - All Right Reserved</p>
     
    
    </Container>
  )
}

export default Footer