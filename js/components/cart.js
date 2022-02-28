import * as ProductRepository from "./ProductRepository.js";

function loadCart () {
  let cart = JSON.parse( localStorage.getItem( "cart" ) );
  if ( cart !== null ) {
    return cart;
  } else {
    return {};
  }
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

//
// let fakeCart = {
//   "17170937":9,
//   "WSRN0022":6
// };
// localStorage.setItem("cart", JSON.stringify(fakeCart));


// const cartData = JSON.parse(localStorage.getItem("cart"));
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
       <button class="btn btn--yellow order-delete-btn" data-id="${cartProductList[i].id}">Ta bort</button>
      </div>
      `; 
      cartList.appendChild(product);
    };

    //Delete buttonn
    let dbtn = document.querySelectorAll(".order-delete-btn");

    let newCart = [];

    dbtn.forEach (btn => {
      btn.addEventListener("click",() => {
        let parent = btn.parentElement;
        let div = parent.parentElement
        div.remove();

      
      });
    });
};



function changeAmountEvents() {
    //Gets all inputfields
    let ordercounter = document.querySelectorAll(".counter");
  
    //Adds eventlistener on inputfields -- inputfeild = event
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
  let cartData = loadCart();
cartProductList = Object.keys(cartData).map((key) => {
  const foundProduct = productData.find((prod) => prod.id === key)
  return {
    ...foundProduct,
    amount: cartData[key]
  };
});

  drawCart();
  changeAmountEvents();
  Price();
};

getProductData();



//sets the total price of the cart when the user gets on the page
function Price (){
  let totalprice = 0;

  let ordercounter = cartList.querySelectorAll(".counter");

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


