

/*
	Shopping Cart Structure(keys for JSON are id of product)
	productId: quantityOfProduct
	{
		"1223":1,
		"dwfwfwfwfww":100,
		"de111": 133
	}
 */
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