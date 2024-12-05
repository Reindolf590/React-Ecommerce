import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/ ${props.id}`}><img src={props.image} onClick={window.scroll(0,0)}/></Link>
        <p>{props.name}</p>
        <div className='item-price'>
            <div className='item-newprice'>
                <p>${props.new_price}</p>
            </div>
            <div className='item-oldprice'>
                <p>${props.old_price}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Item
