import * as CartRepository from "./CartRepository.js";

export async function CartList () {
	let cart = await CartRepository.getCart();
	let cartMessage = document.querySelector( '.cart-message' );
	if ( cart.length === 0 ) {
		cartMessage.style.display = 'block';
	} else {
		cartMessage.style.display = 'none';
	}

	let cartImg = document.querySelector( '.cart-item-img' );
	let shoppingCart = document.getElementById( 'cart' );


	cart.forEach( cartItem => {
		let cartProduct = document.createElement( 'div' );
		cartProduct.classList.add = 'cart-item-wrap';
		cartProduct.innerHTML = `
		    <div class="cart-item">
        <!-- cart items -->
        <div class="cart-items">
        <article class="cart-item">
            <img src="${cartItem.product.image}" class="cart-item-img">  
            <div>
              <h4 class="cart-item-name">${cartItem.product.name}</h4>
              <p class="cart-item-price">${cartItem.product.price} SEK</p>
              <button class="cart-item-remove-btn">remove</button>
            </div>
          
            <div>
              <div class="cart-item-increase-btn">
                <i class="fas fa-chevron-up">+</i>
              </div>
              <p class="cart-item-amount">${cartItem.quantity}</p>
              <div class="cart-item-decrease-btn">
                <i class="fas fa-chevron-down">-</i>
              </div>
            </div>
		   </div>
		`;
		let cartItemAmount = cartProduct.querySelectorAll( '.cart-item-amount' )[0];


		cartProduct.getElementsByClassName( 'cart-item-remove-btn' )[0].addEventListener( 'click', () => {
			deleteCartItem( cartItem.product.id );
		} )
		cartProduct.getElementsByClassName( 'cart-item-increase-btn' )[0].addEventListener( 'click', () => {
			let newQuantity = CartRepository.increaseProductQuantity( cartItem.product.id );
			cartItemAmount.textContent = newQuantity;
			updateTotalAmount();
		} )
		cartProduct.getElementsByClassName( 'cart-item-decrease-btn' )[0].addEventListener( 'click', () => {
			let newQuantity = CartRepository.decreaseProductQuantity( cartItem.product.id );
			cartItemAmount.textContent = newQuantity;
			if ( newQuantity === 0 ) {
				shoppingCart.removeChild( cartProduct )
			}
			updateTotalAmount();
		} )
		shoppingCart.appendChild( cartProduct );
	} )

	function deleteCartItem ( cartItemId ) {
		CartRepository.removeProductFromCart( cartItemId );
		shoppingCart.innerHTML = "";
		updateTotalAmount();
		CartList();
	}

	async function updateTotalAmount () {
		let cartTotal = document.querySelector( '.cart-total' );
		let updatedSum = await CartRepository.calculateTotalPrice();
		cartTotal.textContent = updatedSum;
	}
	updateTotalAmount();

}


CartList();

