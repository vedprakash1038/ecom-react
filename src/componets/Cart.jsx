import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {
  return (
   <>
   
   <div className="container">

{
 cart.length==0 ?(
    <>
    
    <div className='text-center'>
     <h1> Your Cart is empty </h1>
        <Link className='btn btn-primary' to={'/'}>Continue Shopping.....</Link>
    </div>
    </>
):

  cart.map((product)=>{
       return (
<>

<div className="card mt-4">
      <img src={product.imgSrc} style={{width:'20rem',height:'20rem'}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <button className='btn btn-primary'>{product.price}</button>
                                                <button 
                                    
                                                className='btn btn-warning'>Buy Now</button>
      </div>
    </div>

    <div className="container text-center space-x-6 py-5">
      <button className='btn btn-warning'>CheckOut</button>
      <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
    </div>
</>

       )
  })
}
  
   </div>
   </>
  )
}

export default Cart
