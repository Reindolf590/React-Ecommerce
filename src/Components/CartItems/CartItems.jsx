import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import cart_icon from '../../assets/cart_cross_icon.png'


const CartItems = () => {
    const { all_product, cartItems, RemoveCart, getTotalAmount } = useContext(ShopContext)

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} className='cart_product' />
                            <p>{e.name}</p>
                            <p className='text'>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p className='text1'>${e.new_price * cartItems[e.id]}</p>
                            <img src={cart_icon} onClick={() => { RemoveCart(e.id) }} className='cart_icon' />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cart-totalitem'>
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />

                        <div className='cart-totalitem'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cart-totalitem'>
                            <h3>Total</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCCED TO CHECK OUT</button>
                </div>
                <div className='promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='promobox'>
                        <input type='text' placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
