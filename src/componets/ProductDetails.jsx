import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {items} from './Data'
import Product from './Product'
const ProductDetails = ({cart,setCart}) => {
  const {id} =useParams()
  const [product,setProduct] =useState({})
  const [relatedProduct, setRelatedProduct] = useState([])
  useEffect(()=>{
    const filterProduct = items.filter(product => product.id == id)
   setProduct(filterProduct[0]);
 const filterRelatedProduct = items.filter((suman)=> suman.category === product.category )
setRelatedProduct(filterRelatedProduct)
 
  },[id , product.category])
  return (

<>
   <div className="container  justify-center text-center ">
  <div className="img" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src={product.imgSrc} alt="" style={{width:'20rem', height:'20rem'}}/>
    
  </div>
   <div className="card-body ">
                                                <h5 className="card-title text-3xl text-red-500">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button className='btn btn-primary'>{product.price}</button>
                                                <button className='btn btn-warning'>Add To Cart</button>
                                            </div>
   </div>
   <h1 className='text-center mt-5 text-3xl text-emerald-800 '>Related Products</h1>
   <Product cart={cart} setCart={setCart} items={relatedProduct} />
      </>
  )
}

export default ProductDetails
