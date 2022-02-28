import * as ProductRepository from "./ProductRepository.js";
import * as CartRepository from "./CartRepository.js";
// let fakeCart = {
//   "17170937":9,
//   "WSRN0022":6
// };

// Uses this instead of local storage user
// let user = {
//   name:"Axel Åhlin Andersson", 
//   streetadress:"Skogsvägen 32", 
//   zipCode:"19550",
//   location: "Märsta",
//   email: "axelaahlin@gmail.com",
//   phoneNumber: "072 233 53 43",
//   password: "axel"
// };

let cartProductList = [];

function drawOrder (){
  let totalprice = 0;

    for (let i = 0; i < cartProductList.length; i++) {
      let product = document.createElement("li");
      product.innerHTML = 
      `<div class="receipt-item">
          <img src="${cartProductList[i].image}" alt="bild på produkt">
       </div>
      <div>
        <h4 class="name">${cartProductList[i].name}</h4>
        <p>${cartProductList[i].price}</p>
        <p>${cartProductList[i].amount}st</p>
      </div>
      `;

      orderList.appendChild(product);
  
      let prodPrice = cartProductList[i].price.split(' ')[0];
      prodPrice = prodPrice.replace('.', '');
      prodPrice = parseInt(prodPrice);
      totalprice += prodPrice;
    };
    let orderprice = document.createElement("h3");
    orderprice.classList.add("order-value");
    orderprice.innerHTML = 
    `Totalbelopp: ${totalprice} SEK`
    ordervalue.appendChild(orderprice);
  }

// async function getProductData() {
//   const productData = await ProductRepository.getAllProducts();


//   cartProductList = Object.keys(cartData).map((key) => {
//     const foundProduct = productData.find((prod) => prod.id === key)
//     return {
//       ...foundProduct,
//       amount: cartData[key]
//     }
//   });

//   drawOrder();
//   Price();
// };

// getProductData();

async function getProductData () {
  const productData = await ProductRepository.getAllProducts();
  let cartData = CartRepository.loadCart();
  cartProductList = Object.keys( cartData ).map( ( key ) => {
    const foundProduct = productData.find( ( prod ) => prod.id === key )
    return {
      ...foundProduct,
      amount: cartData[key]
    };
  } );
  return cartProductList;
};

async function showProducts () {
  cartProductList = await getProductData();
  drawOrder();
  Price();
}
showProducts();


async function Price () {
  let totalprice = 0;
  // const cartData = JSON.parse(localStorage.getItem("cart"));
  // let ordercounter = document.querySelectorAll(".counter");
  let cart = await getProductData();

  // for(let i = 0; i < cartProductList.length; i++){
  for ( let i = 0; i < cart.length; i++ ) {
    let prodPrice = cart[i].price.split( ' ' )[0];
    prodPrice = prodPrice.replace('.', '');
    prodPrice = parseInt(prodPrice);
    // totalprice += prodPrice*cartProductList[i].amount;
    totalprice += prodPrice * cart[i].amount;
  };

  
 let lastTitel = ordervalue.children.length;


 if(lastTitel !== 0){
  ordervalue.removeChild(ordervalue.firstElementChild);
  } 
  let orderprice = document.createElement("h3");
  orderprice.classList.add("cart-value");
  orderprice.innerHTML = 
  `Totalbelopp: ${totalprice} SEK`
  ordervalue.appendChild(orderprice);

}


//All the elements 
const username = document.getElementById("name-input");
const streetadress = document.getElementById("adress-input");
const zip = document.getElementById("zip-input");
const userlocation = document.getElementById("ort-input");
const email = document.getElementById("email-input");
const phone = document.getElementById("phone-input");
const form = document.querySelector(".order-form");
const orderList = document.querySelector(".order-list");
const order = document.querySelector(".order-wrapper");
const orderinput = document.querySelector(".order-input");
const ordervalue = document.querySelector(".order-price")
const orderReceipt = document.querySelector(".order-receipt")

//for reading fake data
// localStorage.setItem("cart", JSON.stringify(fakeCart));

let userData = JSON.parse(localStorage.getItem("users"));
const loggedInUser = localStorage.getItem("loggedInUser");
const cartData = JSON.parse(localStorage.getItem("cart"));
userData = userData[loggedInUser];

//If u are logged in the inputs are already done (user with fake user)
if (userData){
  username.value = userData.name;
  streetadress.value = userData.streetAdress;
  zip.value = userData.zipCode;
  userlocation.value = userData.location;
  email.value = userData.email;
  phone.value = userData.phoneNumber;
};

form.addEventListener("submit", (e) => {
e.preventDefault();

order.classList.add("hidden");
orderinput.classList.add("hidden");
orderReceipt.classList.remove("hidden")

orderReceipt.innerHTML = 
`<div class="receipt-titel">
<h3>Tack för din beställning</h3>
</div>
<div class="receipt-cart">
<ul class="receipt-list">
</ul>
</div>
<div class="receipt-info">
<p class="mb10">Paketet kommer att skickas till: </p>
<p>
<span>${username.value} </span>
<span>${streetadress.value} ${zip.value},${userlocation.value} </span>
<span>${email.value} </span>
<span>${phone.value}</span>
</p>
</div>
`;
const receiptList = document.querySelector(".receipt-list");

let totalprice = 0;
for (let i = 0; i < cartProductList.length; i++) {
  let product = document.createElement("li");
  product.innerHTML = 
  `<div class="receipt-item">
      <img src="${cartProductList[i].image}" alt="bild på produkt">
   </div>
  <div>
    <p>${cartProductList[i].name}</p>
    <p>${cartProductList[i].price}</p>
    <p>${cartProductList[i].amount} st</p>
  </div>
  `
  receiptList.appendChild(product)

  let prodPrice = cartProductList[i].price.split(' ')[0];
  prodPrice = prodPrice.replace('.', '');
  prodPrice = parseInt(prodPrice);
  totalprice += prodPrice*cartProductList[i].amount;
};
  let lastprice = document.createElement( "h4" );
lastprice.innerText = 
  `Totalbelopp: ${totalprice} SEK`;
receiptList.appendChild(lastprice);
});