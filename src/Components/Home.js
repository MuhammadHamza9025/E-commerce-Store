import React from 'react'


export default function Home() {
  return (
 <>
 <div className="mainsection">
  <div className="details"><span>Welcome to</span> <br /> <h2>Hamza's Store</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi consectetur voluptatum rerum atque voluptatem! Quo minus odit hic maxime molestiae sequi, et blanditiis molestias repellendus alias voluptate esse vel enim.</p>
  <button>Shop Now</button>
  </div>
 
  <div className="images"></div>
 </div>

 <div className="pro">
  <h2><i class='fas fa-arrow-alt-circle-right'> Our Featured Products</i></h2>
  <div className="products">
    <div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHsfso2Y7DioRR3pvHtt09ixqPheSk9FZJQ&usqp=CAU" alt="" /></div>
    <div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaGo9oZSlTDipUfIv3tRc1hVYgdLmeajMrQ&usqp=CAU" alt="" /></div>
    <div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_1uy1S55oAYRkHKnPqmn2KNRiCuKH6wgMQ&usqp=CAU" alt="" /></div>
    <div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErhjxl_5_I-okYpJldhRQi10h1GKbWHboyQ&usqp=CAU" alt="" /></div>
  </div>
 </div>
 <footer>
<div className="links"><h3>Social Links</h3>
<a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-linkedin"></a>
<a href="#" class="fa fa-youtube"></a>


</div>
<div className="Products"><h3>Listed Products</h3>
<a href="#" >Laptops</a>
<a href="#" >Mobiles</a>
<a href="#" >Garnments</a>
<a href="#" >Accessories</a>


</div>
<div className="Stores"><h3>Our Sponsers</h3>
<a href="#" >darak.pk</a>
<a href="#" >Alibaba.pk</a>
<a href="#" >Amazon</a>
<a href="#" >AliExpress.com</a>


</div>
  
 </footer>

 <i class='fas fa-arrow-alt-circle-right'></i>
 <i class='fas fa-caret-square-right'></i>
 </>
  )
}
