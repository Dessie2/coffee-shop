import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
return (
    <div className='footer' id='footer'>
            <div className="footer-content">
                    <div className="footer-content-left">
                            <img src={assets.logo} alt="Logo" className='logoo-img' />
                            <p>Personal project dedicated to specialty coffee and creating authentic spaces. At Brew & Bloom, every cup is crafted with purpose.</p>
                            <div className="footer-social-icons">
                                <img src={assets.facebook_icon} alt=" " className='insta'/>
                                <img src={assets.twitter_icon} alt=" " className='git'/>
                                <img src={assets.linkedin_icon} alt=" " className='linkedin'/>
                            </div>
                    </div>
                    <div className="footer-content-center">
                    <h2>COMPANY</h2>
                         <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-rigth">
                         <h2>GET IN TOUCH</h2>
                         <ul>
                            <li>Contact us</li>
                            <li>varguezdessire85@gmail.com</li>
                         </ul>
                    </div>
            </div>
            <hr />
            <p className="footer-copyright">copyright 2025 © Brew & Bloom. All rights reserved.</p>
    </div>
)
}

export default Footer
