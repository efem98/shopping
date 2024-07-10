
import React from 'react';


   const Script = () =>{
  const cart = document.getElementById("cart");
  const cartShop =document.getElementById("cart-shop");
  const cartClose = document.getElementById("cart__close");

  if(cartShop){
    cartShop.addEventListener("click", () =>{
      cart.classList.add("show-cart")
    })
  }
  if (cartClose) {
    cartClose.addEventListener("click", () => {
      cart.classList.remove("show-cart"); 
    });
  }


  // return (
  // //   <div id="scrollup" className="scroll-up">
  // //   {/* Your scroll-up button or content */}
  // // </div>
  // )
  function scrollUp(){
    const scrollUp = document.getElementById("scrollup");
    if(this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)
};





export default Script









































// const ScrollUpComponent = () => {
  

//   return (
    
//   );
// };

// const BigCart = () => {
//   const cartRef = useRef(null);
//   const cartShopRef = useRef(null);
//   const cartCloseRef = useRef(null);

//   useEffect(() => {
//     const cart = cartRef.current;
//     const cartShop = cartShopRef.current;
//     const cartClose = cartCloseRef.current;

//     const showCart = () => {
//       cart.classList.add('show-cart');
//     };

//     const hideCart = () => {
//       cart.classList.remove('show-cart');
//     };

//     if (cartShop) {
//       cartShop.addEventListener('click', showCart);
//     }

//     if (cartClose) {
//       cartClose.addEventListener('click', hideCart);
//     }

//     return () => {
//       if (cartShop) {
//         cartShop.removeEventListener('click', showCart);
//       }
//       if (cartClose) {
//         cartClose.removeEventListener('click', hideCart);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div id="cart" ref={cartRef}>
//         {/* Cart content */}
//         <button id="cart__close" ref={cartCloseRef}>Close Cart</button>
//       </div>
//       <button id="cart-shop" ref={cartShopRef}>Open Cart</button>
//     </div>
//   );
// };













// const bigCart = () =>{
//   const cart = document.getElementById("cart");
//   const cartShop =document.getElementById("cart-shop");
//   const cartClose = document.getElementById("cart__close");

//   if(cartShop){
//     cartShop.addEventListener("click", () =>{
//       cart.classList.add("show-cart")
//     })
//   }
//   if(cartClose){
//     cartClose.addEventListener("click", () =>{
//       cart.classList.remove("show-cart")
//     })
//   }
// }

