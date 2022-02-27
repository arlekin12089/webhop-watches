import * as ProductRepository from "./ProductRepository.js";

function loadCart () {
	return JSON.parse( localStorage.getItem("cart") );
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

let fakeCart = {
  "17170937":9,
  "WSRN0022":6
};


localStorage.setItem("cart", JSON.stringify(fakeCart));
const cartData = JSON.parse(localStorage.getItem("cart"));
let cartProductList = [];

const cartList = document.querySelector(".cart-list");
const cartTotalPrice = document.querySelector(".cart-price");

//draws the items
function drawCart (){
    for (let i = 0; i < cartProductList.length; i++) {
      let product = document.createElement( "article" );
      product.classList.add( "cart-item" );
      product.innerHTML = 
      `<div class="cart-photo">
          <img src="${cartProductList[i].image}" alt="bild på produkt">
       </div>
      <div class="item-info">
        <h4>${cartProductList[i].name}</h4>
        <p class="cart-item-price">${cartProductList[i].price}</p>
        <div class="item-amount mobile-view">
          <input class="counter" data-id="${cartProductList[i].id}" type="number" id="itemcounter" min="1" max="5" value="${cartProductList[i].amount}">
        </div>
       <button class="btn btn--yellow order-delete-btn">Ta bort</button>
      </div>
      <div class="item-amount desktop-view">
          <input class="counter" data-id="${cartProductList[i].id}" type="number" id="itemcounter" min="1" max="5" value="${cartProductList[i].amount}">
      </div>
      `; 
      cartList.appendChild(product);
    };
}

function changeAmountEvents() {
    //Gets all inputfields
    let ordercounter = document.querySelectorAll(".counter");
  
    //Adds eventlistener on inputfields 
    ordercounter.forEach(event => {
      event.addEventListener("input",() => {
      //gets the dataatribut from the item
      let data = event.getAttribute("data-id")
  
      const rightinput = cartProductList.find(event => {
        return event.id == data;
      
      }) 
      console.log(data);
      console.log(event.value)

      // Räkna ut totalsumman. 
      setProductsAmount(data,event.value);
      Price();
    }
    );
  })
};

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
  Price();
};

getProductData();

//sets the total price of the cart when the user gets on the page
function Price (){
  let totalprice = 0;
  //const cartData = JSON.parse(localStorage.getItem("cart"));
  let ordercounter = document.querySelectorAll(".counter");

  for(let i = 0; i < cartProductList.length; i++){
    let prodPrice = cartProductList[i].price.split(' ')[0];
    prodPrice = prodPrice.replace('.', '');
    prodPrice = parseInt(prodPrice);
    totalprice += prodPrice*ordercounter[i].value;
  };

 let lastTitel = cartTotalPrice.children.length;

 if(lastTitel !== 0){
  cartTotalPrice.removeChild(cartTotalPrice.firstElementChild);
  } 
  let orderprice = document.createElement("h3");
  orderprice.classList.add("cart-value");
  orderprice.innerHTML = 
    `Totalbelopp: <span>${totalprice} SEK</span>`
  cartTotalPrice.appendChild(orderprice);
}