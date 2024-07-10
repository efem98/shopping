import  {useRef} from "react";
import {  FaBars,FaTimes } from 'react-icons/fa' ;
import "../style/menu.css";


function Navbar()  {
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div >
    <section id= "head"> 
       
    <div className="navigations">
    
    <div className="first-nav">
      <ul>
      <li><a href="">About US</a></li>
      <li><a href="">My Account</a></li>
      <li><a href="">Feauterd product</a></li>
      <li><a href="">Wishlist</a></li>
      </ul>
    </div>

    <div className="second-link">
      
      <li><a href="">Order Tracking</a></li>
      <li>
      <div className="dropdown">
        <button className="dropbtn">english</button> 
      <div className="dropdown-content">
        <a href="">English</a>
      </div>
      <a href="">Usd</a>
      </div>
    </li>
      <li>
      <div className="dropdown">
        <button className="dropbtn">usd</button> 
      <div className="dropdown-content">
        <a href="">french</a>
        <a href="">italy</a>

      </div>
    </div>
    
</li>
    </div>
  </div>
  </section>
  <section id="second-nav">
    <div className=" nav2 navigations">
      <div className="logo1">
        <h3>HotB</h3>
      </div>
      <div className="search-bar">
        <div className="all-box">
          <p>All</p>
        </div>
        
        <input type="text" placeholder="search for you favourite product here" / >
        <button className="normal">search</button>
      </div>
      <div className="love">
       
        <div className="nav__btns">
        <div className="login__toggle" id="login-toggle">
        <i className="fas fa-user"></i>
        </div>
        <div className="nav__toggle" id="nav-toggle">
        <i className="fa-brands fa-shopify "></i>
        </div>
         
      <li>
      
    
  </li>
  
         
       </div>
     
      </div>
      
    </div>
    </section> 


 <section id="third-nav" >
    
    <div className="nav3 navigations" >
   
      <div className="dropdown">
        <h5>All Department</h5>
          <div className="dropdown-content">
            <a href="">french</a>
            <a href="">italy</a>
          </div>
        </div>
   

      <div className="nav-links">
      <nav ref={navRef} className="van">
      <li>
       <div className="dropdown">
    <button className="dropbtn gen">Home</button> 
                              <div className="dropdown-content">
                                <a href="">English</a>
                                <a href="">Usd</a>
                              </div>
                              </div>
     </li>
              <li>
                <div className="dropdown">
                <button className="dropbtn gen">Shop</button> 
                <div className="dropdown-content">
                  <a href="">french</a>
                    <a href="">italy</a>
                    </div>
                    </div>
                            
                      </li>
          
              <li>
              <a href="#">
               <i className="fa-solid fa-headphones"></i>headphone</a></li>
                 <li><a href=""><i className="fa-solid fa-bag-shopping"></i>Qlt Bags</a></li>
                   <li><a href=""><i className="fa-solid fa-shirt"></i>Shirt</a></li>
                    <li><a href=""><i className="fa-brands fa-shopify"></i>weekly gift</a></li>
            
                       
        <button className="nav-btn nav-close-btn" onClick={showNavbar} >
          <FaTimes/>
            </button>                         
            </nav>
      
    </div>
   
    <div className="super-discount">
    <div className="dropdown">
      <img  className="logo"  src="images/new.jpg" />
    <div className="dropdown-content">
      <a href="">french</a>
      <a href="">italy</a>
      </div>   
  </div>   
  </div>

  <button className="nav-btn" onClick={showNavbar} >
    <FaBars/>
    </button>
        </div>
          
         
    
  

</section> 
 
 </div>
  )
}

export default Navbar




