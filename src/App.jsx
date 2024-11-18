import React, { useState } from 'react'
import Navbar from './componets/Navbar/Navbar'
import './App.css'
import Product from './componets/Product'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import ProductDetails from './componets/ProductDetails'
import SearchItem from './componets/SearchItem'
import Cart from './componets/Cart'
import { items } from './componets/Data'
const App = () => {
  const [data,setData]=useState([...items])
  const [cart,setCart]=useState([])
  return (
   
    <div>
      <Router>
    <Navbar cart={cart} setData={setData} />
     <Routes>
   <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />}></Route>
   <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart} />}></Route>
   <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart} />}></Route>
   <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
    </Routes>
    </Router>
    </div>
  )
}

export default App
