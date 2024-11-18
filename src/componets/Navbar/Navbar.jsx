import React, { useState } from 'react'
import { Link ,useLocation,useNavigate} from 'react-router-dom'
import { items } from '../Data'
import { FaCartArrowDown } from "react-icons/fa";




const Navbar = ({setData,cart}) => {
  const loctaion=useLocation();
  const navigate = useNavigate();
  const [serachTerm,setSearchTerm] = useState("")
  const filterByCategory = (category)=>{

   const element = items.filter((Product)=> Product.category === category)
setData(element)

  }

  const filterByPrice=(price)=>{
    const element = items.filter((Product)=> Product.price >= price)
    setData(element)
  }
  const handleSubmit= (e) =>{
       e.preventDefualt();
       navigate(`/search/ ${searchTerm}`)
      
     
  }
  return (
<>
<div className="nav-bar">
  <Link to={'/'} onClick={()=> setData(items)} className="brand  ">E-cart</Link>
  
    <form 
    onSubmit={handleSubmit}
    className="search-bar" >
        <input
        value={serachTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
         type="text "
          placeholder='Search Products' />
    </form>
  <Link to={'/cart'} className="cart">
  <button type="button" className="btn btn-primary position-relative">
  < FaCartArrowDown/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
  </Link> 
</div>
{
  loctaion.pathname =='/' && (

    <div className="navbar-wrapper">
    <div className="items">Filter By {'->'}</div>
    <div  onClick={()=>setData(items)} className="items">No Filter</div>
    <div onClick={()=>filterByCategory('mobiles')} className="items">Mobiles</div>
    <div onClick={()=>filterByCategory('laptops')} className="items" >Laptops</div>
    <div onClick={()=>filterByCategory('tablets')} className="items">Tablets</div>
    <div onClick={()=>filterByPrice(29999)} className="items">{'>='}29999</div>
    <div onClick={()=>filterByPrice(49999)} className="items">{'>='}49999</div>
    <div onClick={()=>filterByPrice(69999)} className="items">{'>='}69999</div>
    <div onClick={()=>filterByPrice(99999)} className="items">{'>='}89999</div>

</div>
  )
}

</>
  )
}

export default Navbar
