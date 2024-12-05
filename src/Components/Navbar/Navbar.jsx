import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartitems} = useContext(ShopContext);

    return (
        <div className='nav'>
            <div className='nav-logo'>
                <img src={logo}></img>
                <p>SHOPPER</p>
            </div>
            <ul>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-cart'>
                <Link to='/loginsignup'><button className='btn'>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} /></Link>
                <div className='nav-cart-count'>{getTotalCartitems()}</div>
            </div>

        </div>
    )
}

export default Navbar
