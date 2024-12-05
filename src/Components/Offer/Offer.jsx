import './Offer.css'
import exclusive_image from '../../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className='offer-left'>
        <h2>Exclusive</h2>
        <h3>Offers For You</h3>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='offer-btn'>Check Now</button>
      </div>
      <div className='offer-right'>
        <img src={exclusive_image}/>
      </div>
    </div>
  )
}

export default Offer
