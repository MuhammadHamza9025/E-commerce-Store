import React, { useEffect, useState } from 'react'
import app from './App.css'
import ResponsiveNav from './Components/ResponsiveNav'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import { BrowserRouter,Routes,Route, json } from 'react-router-dom'
export default function App() {

  // Api Fetching 
const [api,setapi]=useState([])
  const fetchapi =  async () =>{
    const response= await fetch('https://fakestoreapi.com/products')
    // const response= await fetch('https://jsonplaceholder.typicode.com/photos')
setapi(await response.json())
//  const response= await fetch('https://dummyjson.com/products/search?q=phone')
//  setapi(await response.json())
//  console.log(await response.json())

 fetch ('https://fakestoreapi.com/products')
     
  }

  useEffect(()=>{
    fetchapi()
  },[]);
const [cart,setcart]=useState([]);
  const addtocart=(data)=>{
setcart([...cart,data])
  }
  const [view,setview]=useState([]);
  const addtoview=(data)=>{
setview([data])
  }
  
  return (
   <>
   <BrowserRouter>
   <ResponsiveNav size={cart.length}></ResponsiveNav>
   
  
   <Routes>
    <Route path='/Home' element={<Home></Home>}></Route>
    <Route path='/About' element={<About></About>}></Route>
    <Route path='/Services' element={<Services api={api} addtocart={addtocart} addtoview={addtoview} view={view}></Services>}></Route>
    <Route path='/Contact' element={<Contact cart={cart} setcart={setcart}></Contact>} ></Route>
    <Route path='/' element={<Home></Home>}></Route>
    </Routes>
   </BrowserRouter>
  

   
   </>
  )
}
