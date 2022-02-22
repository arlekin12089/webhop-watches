import * as ProductRepository from "./ProductRepository.js";
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
 * Set products amount, check if quantity equals to 0, then remove from the cart
 * otherwise set new quantity
 * @param {String} productId
 * @param {String} quantity
 */
export function setProductsAmount ( productId, quantity ) {
	let cart = loadCart();
	if ( quantity === 0 ) {
		delete cart[productId];
	} else {
		cart[productId] = quantity;
	}
	saveCart( cart );
}
/**
 * @returns returns the cart as the list of cart items 
 * where cart item is an object {"product": (), "quantity":1122}
 */
export async function getCart () {
	let cart = loadCart();
	let products = await ProductRepository.getAllProducts();
	let productIds = Object.keys( cart );
	let cartItems = productIds.map( productId => {
		let quantity = cart[productId];
		let product = products.find( product => product.id === productId );
		let productObj = { product, quantity };
		return productObj;
	} );

	return cartItems;
}

window.setProductsAmount = setProductsAmount;
window.getCart = getCart;