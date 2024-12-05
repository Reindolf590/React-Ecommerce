import { useContext } from 'react'
import all_product from '../assets/all_product'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'
import Related from '../Components/Related/Related'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product ={product}/>
      <Description/>
      <Related/>
    </div>
  )
}

export default Product
