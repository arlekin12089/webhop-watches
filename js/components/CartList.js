import * as CartRepository from "./CartRepository.js";

export async function CartList () {
	let cart = await CartRepository.getCart();
	let cartImg = document.querySelector( '.cart-item-img' );
	let shoppingCart = document.getElementById( 'cart' );

	cart.forEach( product => {
		let cartProduct = document.createElement( 'div' );
		cartProduct.classList.add = 'cart-item-wrap';
		cartProduct.innerHTML = `
		    <div class="cart-item">
				<header>
          <h3>Your Cart</h3>
        </header>
        <!-- cart items -->
        <div class="cart-items">
        <article class="cart-item">
            <img src="${product["product"].image}" class="cart-item-img">  
            <div>
              <h4 class="cart-item-name">${product["product"].name}</h4>
              <p class="cart-item-price"></p>
              <button class="cart-item-remove-btn">remove</button>
            </div>
          
            <div>
              <button class="cart-item-increase-btn">
                <i class="fas fa-chevron-up"></i>
              </button>
              <p class="cart-item-amount">2</p>
              <button class="cart-item-decrease-btn">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
		   </div>
		`;
		shoppingCart.appendChild( cartProduct );
	} )




}
CartList();