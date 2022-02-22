import * as ProductRepository from "./ProductRepository.js";

function loadCart () {
	return JSON.parse( localStorage.getItem( "cart" ) );
}

function saveCart ( cart ) {
	localStorage.setItem( "cart", JSON.stringify( cart ) );
}

function setProductsAmount ( productId, quantity ) {
	let cart = loadCart();
	if ( quantity === 0 ) {
		delete cart[productId];
	} else {
		cart[productId] = quantity;
	}
	saveCart( cart );
}

let fakeCart = {"17170937":9,"WSRN0022":6};

localStorage.setItem("cart", JSON.stringify(fakeCart));
const cartData = JSON.parse(localStorage.getItem("cart"));
let cartProductList = [];

const cartList = document.querySelector(".cart-list");
const cartTotalPrice = document.querySelector(".cart-price");

//draws the items
function drawCart (){
    for (let i = 0; i < cartProductList.length; i++) {
      let product = document.createElement("li");
      product.innerHTML = 
      `<div class="cart-item">
          <img src="${cartProductList[i].image}" alt="bild på produkt">
       </div>
      <div class="item-info">
        <p>${cartProductList[i].name}</p>
        <p>${cartProductList[i].price}</p>
        <input class="counter" data-id="${cartProductList[i].id}" type="number" id="itemcounter" min="1" max="5" value="1">
       <button class="order-delete-btn">Ta bort</button> 
      </div>
      `; 
      cartList.appendChild(product);
    };
}

function changeAmountEvents() {

    //all inputfields
    let ordercounter = document.querySelectorAll(".counter");
  
    //Adds eventlistener on inputfields 
    ordercounter.forEach(event => {
      event.addEventListener("input",() => {
      let data = event.getAttribute("data-id")
  
      const rightinput = cartProductList.find(event => {
        return event.id == data;
      }) 

      console.log(data);
      console.log(event.value)
  
      // setProductsAmount();
      }
    );
  })
}

async function getProductData() {
  const productData = await ProductRepository.getAllProducts();

  cartProductList = Object.keys(cartData).map((key) => {
    const foundProduct = productData.find((prod) => prod.id === key)
    return {
      ...foundProduct,
      amount: cartData[key]
    }
  });

  drawCart();
  changeAmountEvents();
}

getProductData();

//sets the total price of the cart when the user gets on the page
function Price (){
  let totalprice = 0;
  
  for(let i = 0; i < cartData.length; i++){
    let prodPrice = cartData[i].price.split(' ')[0];
    prodPrice = prodPrice.replace('.', '');
    prodPrice = parseInt(prodPrice);
    totalprice += prodPrice*ordercounter[i].value;
  };
  
  let orderprice = document.createElement("h3");
  orderprice.classList.add("cart-value");
  orderprice.innerHTML = 
  `Totalbelopp: ${totalprice} SEK`
  cartTotalPrice.appendChild(orderprice);
  }

  Price();