import './Collections.css'
import new_collections from '../../assets/new_collections'
import Item from '../Item/Item'

const Collections = () => {
  return (
    <div className='collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='new-collections'>
            {new_collections.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div> 
    </div>
  )
}

export default Collections
