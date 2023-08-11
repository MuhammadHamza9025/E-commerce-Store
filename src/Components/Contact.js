import React, { useState } from 'react'

const Contact = ({cart,setcart}) => {

const [del,setdel]=useState(false);

    const remove=(id)=>{
        const val=cart.filter((value)=>value.id !==id)
        setcart(val);
        setdel(!del)
      
      }
  return (
   <>
   <section className='cartsection'>
{
cart.map((val)=>{
    return (

      <>
      
        <div className="cartcontainer">
    <div className="cartpicture"><img src={val.image} alt="" /></div>
    <div className="carttitle">{val.title}</div>
    <div className="cartprice" >{val.price}$</div>

<i class="fa fa-trash-o" onClick={()=>remove(val.id)}></i>
</div>
<hr />


      </>

    )
})

}

   </section>


   <h3> 
    {`Total Price ${
      cart.map(val=>val.price).reduce((total,value)=>parseFloat(total)+parseFloat(value),0)
    } /- Rs.` }
   </h3>

   </>
  )
}

export default Contact
