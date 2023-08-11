import React, { useState } from 'react'

export default function Services({api,addtocart,addtoview,view}) {
    const [display,setdisplay]=useState(false)


    const [search, setsearch]=useState('');
    const [filter,setfilter]=useState(false) //for filter tag


    const [filteritem,setfilteritem]=useState(api);
    console.log(filteritem)

    const filteritemss=(category)=>{
        console.log('Clickked')
        const update=api.filter((curr)=>{
            return curr.category===category;
        })
        setfilteritem(update);  
   }
    const filterbyprice1=(price)=>{
        console.log('Clickked')
        const update=api.filter((curr)=>{
            return curr.price<=100 && curr.price>=1;
        })
        setfilteritem(update);  
   }
    const filterbyprice2=(price)=>{
        console.log('Clickked')
        const update=api.filter((curr)=>{
            return curr.price<=500 && curr.price>=100;
        })
        setfilteritem(update);  
   }
    const filterbyprice3=(price)=>{
        console.log('Clickked')
        const update=api.filter((curr)=>{
            return curr.price<=1000 && curr.price>=500;
        })
        setfilteritem(update);  
   }
  return (
   <>
  
   <div className="servicenav">
    
<div className="leftcat">    <div className="filter" onClick={()=>setfilter(!filter)}><i class="fa fa-filter" ></i><span>Filter</span></div>

<div className={filter?'filterscategory ':'filterclose'}>
    <button onClick={()=>setfilter(!filter)}><i class="fa fa-close"></i></button>
    
    <div className="radiobuttons">
  <h1>Categories</h1>
   <div className="lable1"> <input type="radio" name="chexk" id="" onClick={()=>filteritemss("electronics")} />
    <label htmlFor="">Electronics</label></div>
   <div className="lable1"> <input type="radio" name="chexk" id="" onClick={()=>filteritemss("jewelery")}/>
    <label htmlFor="">Jewelery</label></div>
   <div className="lable1"> <input type="radio" name="chexk" id=""onClick={()=>setfilteritem(api)} />
    <label htmlFor="">All Categories</label></div>
    
  </div>
    <div className="radiobuttons">
  <h1>Price</h1>
   <div className="lable1"> <input type="radio" name="price" id="" onClick={()=>filterbyprice1()} />
    <label htmlFor="">1-100 $</label></div>
   <div className="lable1"> <input type="radio" name="price" id="" onClick={()=>filterbyprice2()} />
    <label htmlFor="">100-500 $</label></div>
   <div className="lable1"> <input type="radio" name="price" id="" onClick={()=>filterbyprice3()} />
    <label htmlFor="">500-1000$</label></div>
   
    
  </div>

</div>
</div>
   <div className="input"> 
   
<i class="fa fa-search"></i>
   <input type="text" name="" id="" onChange={(e)=>{ setsearch(e.target.value)}} placeholder='Search ' /></div>
    
</div>
  <div className="maindiv">




{/* //Right start */}
  <section className='right'>

  
{
filteritem
.filter((val)=>{
if(search===''){
    return val;}
else if(val.title.toLowerCase().includes(search.toLowerCase().trim()))
{
    return val;
}
}
)

.map((val)=>{
    return (

        <div className="container">
   
    <div className="picture" onClick={()=>setdisplay(!display)}><img src={val.image} alt="" onClick={()=>addtoview(val)}/></div>
    <hr />
    <div className="title">{val.title}</div>
  
    <div className="price">{val.price}$</div>
    <div className="btn"><button onClick={()=>addtocart(val)}>Add to Cart</button></div>
</div>
    )
})

}

   </section>

   <div className={display?'close':'hider'}>
   <div className={display?'hidebtn':'nohide'}><button onClick={()=>setdisplay(false)}><i class="fa fa-close"></i></button></div>
   
   <section className={display?'view':'nohide'}>
{
view.map((val)=>{
    return (

        <div className='viewcontainer'>
    <div className="viewpicture" onClick={()=>setdisplay(!display)}><img src={val.image} alt="" onClick={()=>addtoview(val)}/></div>
   <div className="combine">
    <div className="viewtitle">{val.title}</div>
    <div className="viewprice">{val.description}</div>
    <div className="viewprice">{val.rate}</div>
    <div className="viewbtn"><button onClick={()=>addtocart(val)}>Add to Cart</button></div>
    </div>
</div>
    )
})

}
</section>
    
   </div>
  </div>
   
   </>
  )
}
