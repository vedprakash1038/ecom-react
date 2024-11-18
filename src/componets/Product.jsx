import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
const Product = ({items,cart,setCart}) => {
    const addToCart=(id,price,description,imgSrc)=>{
        const obj={

            id,price,description,imgSrc
        }
setCart([...cart,obj])
console.log("cart elment =",cart);
toast.success('item added', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
    }
    return (
        <>
                   <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition:Bounce/>
            <div className="container py-5">
                <div className="row">
                    {

                        items.map((product) => {

                            return (
                                <>
                                    <div key={product.id} className="col-lg-4 my-2">
                                        <div className="card" style={{ width: '20rem' }}>
                                            <Link to={`/product/${product.id}`} style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <img src={product.imgSrc} className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button className='btn btn-primary'>{product.price}</button>
                                                <button 
                                                onClick={()=> addToCart(product.id,product.price,product.description,product.imgSrc)}
                                                className='btn btn-warning'>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
