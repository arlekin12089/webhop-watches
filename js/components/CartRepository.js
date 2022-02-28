
/*
	Shopping Cart Structure(keys for JSON are id of product)
	productId: quantityOfProduct
	{
		"1223":1,
		"dwfwfwfwfww":100,
		"de111": 133
	}
 */

const CART = "shoppingCart";

/** 
 * Load cart from Local Storage 
 * and if cart doesn't exist return empty cart
 * @returns {Object} cart object {"productId": quantityOfProducts}
 */
export function loadCart () {
	let cart = JSON.parse( localStorage.getItem( CART ) );
	if ( cart !== null ) {
		return cart;
	} else {
		return {};
	}
}

/** 
 * Save cart to Local Storage
 * @param {Object} cart object {"productId": quantityOfProducts}
 */
export function saveCart ( cart ) {
	localStorage.setItem( CART, JSON.stringify( cart ) );
}

/**
 * Remove product from cart and update local storage
 * @param {String} productId id of the product to be removed from the cart
 */
export function removeProductFromCart ( productId ) {
	let cart = loadCart();
	delete cart[productId];
	saveCart( cart );
}



/** 
 * Add product to cart and update local storage
 * @param {String} productId id of the product to be added to the cart
 */
export function addProductToCart ( productId ) {
	let cart = loadCart();
	//compare with undefined if there is no product in cart
	if ( cart[productId] === undefined ) {
		cart[productId] = 1;
	} else {
		cart[productId]++;
	}
	saveCart( cart );
}


export function setProductsAmount ( productId, quantity ) {
	let cart = loadCart();
	if ( quantity === 0 ) {
		delete cart[productId];
	} else {
		cart[productId] = quantity;
	}
	saveCart( cart );
}

