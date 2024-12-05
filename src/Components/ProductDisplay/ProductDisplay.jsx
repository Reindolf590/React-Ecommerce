import './ProductDisplay.css'
import star from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { AddtoCart } = useContext(ShopContext)

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-list'>
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className='productdisplay-img'>
          <img src={product.image} className='main' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='right-star'>
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star_dull} />
          <p>(122)</p>
        </div>
        <div className='right-prices'>
          <div className='oldprice'>${product.old_price}</div>
          <div className='newprice'>${product.new_price}</div>
        </div>
        <div className='right-description'>
          A light weight, usually knitted, pullover shirt,
          close-fitting and with a round neckline and short sleeves,
          worn as an undershirt or outering garment
        </div>
        <div className='right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-size'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className='product-btn' onClick={() => { AddtoCart(product.id) }}>ADD TO CART</button>
        <p className='right-category'><span>Category : </span>Women, T-shirt, Crop Top</p>
        <p className='right-category'><span>Tags : </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
