import './Footer.css'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo}/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Offices</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-socials'>
            <div className='icons'>
                <img src={instagram_icon}/>
            </div>
            <div className='icons'>
                <img src={pintester_icon}/>
            </div>
            <div className='icons'>
                <img src={whatsapp_icon}/>
            </div>
        </div>
        <div className='copyright'>
            <hr></hr>
            <p>Copyright © 2024 - All rights reserved</p>
        </div>
    </div>
  )
}
export default Footer
