
import React, {useState,useEffect} from "react";
import products from "./Contact";
import "./style/main.css";
import ShopingCart from "./components/Shopingcart";
import { GiShoppingBag } from "react-icons/gi";

function App() {
  const [cartsVisibilty, setCartVisible] =
  useState(false);
const [productsInCart, setProducts] =
  useState(
    JSON.parse(
      localStorage.getItem(
        "shopping-cart"
      )
    ) || []
  );
useEffect(() => {
  localStorage.setItem(
    "shopping-cart",
    JSON.stringify(productsInCart)
  );
}, [productsInCart]);
const addProductToCart = (product) => {
  const newProduct = {
    ...product,
    count: 1,
  };
  setProducts([
    ...productsInCart,
    newProduct,
  ]);
};

const onQuantityChange = (
  productId,
  count
) => {
  setProducts((oldState) => {
    const productsIndex =
      oldState.findIndex(
        (item) =>
          item.id === productId
      );
    if (productsIndex !== -1) {
      oldState[productsIndex].count =
        count;
    }
    return [...oldState];
  });
};

const onProductRemove = (product) => {
  setProducts((oldState) => {
    const productsIndex =
      oldState.findIndex(
        (item) =>
          item.id === product.id
      );
    if (productsIndex !== -1) {
      oldState.splice(productsIndex, 1);
    }
    return [...oldState];
  });
};
  return (
    <div>
    <div className="App">
    <ShopingCart
    visibilty={cartsVisibilty}
    products={productsInCart}
    onClose={() =>
      setCartVisible(false)
    }
    onQuantityChange={
      onQuantityChange
    }
    onProductRemove={onProductRemove}
  />
    <button
      className="btn shopping-cart-btn"
      onClick={() =>
        setCartVisible(true)
      }>
      <GiShoppingBag  size={20} />
      {productsInCart.length >
        0 && (
        <span className="product-count">
          {
            productsInCart.length
          }
        </span>
      )}
    </button>
    </div>
  
  <section id="hero" className="home">
   
     <div className="hero">
     <h4>Trade-in-offer</h4>
     <h2>super value deals</h2>
     <h1>on all products</h1>
     <p>save more with coupons & up to 70% off!</p>
     <button>Shop Now</button>
     </div>
  </section>

  <section id="features">

		
     <div className="feature-box">
       <div className="feature-image">
  
         <img src="image/heels1.jpg" alt="heel1"/>
             <p>Online delivery<br />free delivery</p>
       
       </div>


       <div className="feature-image">
  
         <img src="image/heels2.jpg" />
             <p>Online delivery<br />free delivery</p>
       
       </div>
       <div className="feature-image">
  
         <img src="image/heels3.jpg" />
             <p>Online delivery<br />free delivery</p>
       
       </div>
       <div className="feature-image">
  
         <img src="image/blackshoe.jpg" />
             <p>Online delivery<br />free delivery</p>
       
       </div>
  
       </div>
  
       <div className="technology">
         <div className="te-box">
           <div className="te">
           <p>meaccons noin </p>
           <h5>PRO scoopter</h5>
           </div>
           <div className="tee">
             <p>weekend discount</p>
             <span>$2000</span>
           </div>
           <img src="image/polo.jpg"  alt="heel1"/>
         </div>
         <div className="te-box">
           <div className="te">
           <p>meaccons noin </p>
           <h5>PRO scoopter</h5>
           </div>
           <div className="tee">
             <p>weekend discount</p>
             <span>$2000</span>
           </div>
           <img src="image/shirt3.jpg"  alt="heel1"/>
         </div>
         <div className="te-box">
           <div className="te">
           <p>meaccons noin </p>
           <h5>PRO scoopter</h5>
           </div>
           <div className="tee">
             <p>weekend discount</p>
             <span>$2000</span>
           </div>
           <img src="image/shoe.jpg" />
         </div>
         
  
       </div>
      
       {products.map((product) => (  
        <div className="pro">
       <div className="product-good  section1">
        <div>
       <img src="images/jean.jpg" />
       </div>
       <div className="description">
      
      
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>145$</h4>
       </div>
          
        <a href="#"><i className="fas fa-shopping-cart " onClick={() =>
          addProductToCart(
            product
          )
        }></i></a>
        
     </div>
 
     <div className="product-good  section1">
  
       <img src="images/little.jpg" />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart " onClick={() =>
        addProductToCart(
          product
        )
      }></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="image/shirt5.jpg" />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart " onClick={() =>
        addProductToCart(
          product
        )
      }></i></a>
     </div>
     
     <div className="product-good section1">
  
       <img src="images/nice.jpg" />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart " onClick={() =>
        addProductToCart(
          product
        )
      }></i></a>
     </div>

     <div className="product-good  section1">
  
       <img src="image/shirt5.jpg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart " onClick={() =>
        addProductToCart(
          product
        )
      }></i></a>
     </div>
     </div>
    ))}
    
  </section>


  
  <section id="product" className="section1">
     <div className="new ">
     <h3>Featured Product</h3>
     <p>our collections brings you the most wonderful smile</p>
     </div>
     {products.map((product) => ( 
     <div className="product">
     <div className="product-good  section1">
  
       <img src="image/polo.jpg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="images/cloth1.jpeg" />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="images/male1.jpg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="image/male2.jpg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="image/polo.jpg" />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="image/man3.jpg" />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="images/new.jpg"/>
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="image/princessshoe.jpg" />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     </div>
    ))}
  </section>
  
  <section id="banner">
     <h4>Repair services</h4>
     <h2>Enjoy up to <span>50% off </span> discount on your first product</h2>
     <button>Shop Now</button>
  </section>
  
  <section id="product2"className="section1">
     <div className="new ">
     <h3>New Arrivals</h3>
     <p>summer collection new modern design</p>
     </div>
     <div className="product">
     <div className="product-good  section1">
        <div>
       <img src="images/jean.jpg" />
       </div>
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$174</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="image/gown1.jpg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$54</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>

     <div className="product-good  section1">
  
       <img src="images/gown2.jpeg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
    <img src="images/female1.jpg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
      
       <img src="images/shirt4.jpg" />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
     
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
     
       <img src="images/female2.jpg" />
       
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="images/female5.jpg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     <div className="product-good  section1">
  
       <img src="images/female4.jpg"  />
       <div className="description">
         <span>Adidas</span>
       <h5>summer carton shirt</h5>
       <div className="star">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
       </div>
       <h4>$74</h4>
       </div>
       <a href="#"><i className="fas fa-shopping-cart "></i></a>
     </div>
     </div>
  </section>
  
  <section id="sm-banner" className="section1">
     <div className="banner-box">
       <h4>crazy deals</h4>
       <h2>buy 1 get 1 free</h2>
       <span>the best classNameic dress is on sales at cara</span>
       <button className="white normal">learn more</button>
     </div>
     <div className="banner-box">
       <h4>crazy deals</h4>
       <h2>buy 1 get 1 free</h2>
       <span>the best classNameic dress is on sales at cara</span>
       <button className="white normal">learn more</button>
     </div>
  </section>
  
  <section id="banner3" >
     <div className="banner-box">
       <h4>crazy deals</h4>
       <h3>the best classNameic dress is on sales at cara</h3>
       
     </div>
     <div className="banner-box">
       <h4>crazy deals</h4>
       <h3>the best classNameic dress is on sales at cara</h3>
       
     </div>
     <div className="banner-box">
       <h4>crazy deals</h4>
       <h3>the best classNameic dress is on sales at cara</h3>
       
     </div>
  </section>
  
  <section id="newsletter" className="section1">
     <div className="newstext">
       <h4>Sign Up For Newsletters</h4>
       <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
     </div>
     <div className="form">
       <input type="text" placeholder ="your email address" />
       <button className="normal">Sign up</button>
     </div>
  </section>
  <script src="script.js"></script>
  </div>
  )
}

export default App;
