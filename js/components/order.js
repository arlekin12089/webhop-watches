let fakeCart = [
  {
    "id": "17170937",
    "name": "Big Bang One Click 33mm",
    "desc": "Classic Fusion Svart/Gummi Ø42 mm",
    "image": "sass/img/watches/17381957_1.jpeg",
    "brand": "Hublot",
    "material": "gold",
    "color": "yellow",
    "price": "20.000 SEK",
    "categoryId": "man",
    "featured": true
  },
  {
    "id": "WSRN0022",
    "name": "Ronde Solo De Cartier",
    "desc": "Ronde Solo De Cartier Watch 42mm, Automatic Movement, Steel, Leather",
    "image": "sass/img/watches/17331438_1.jpeg",
    "brand": "Cartier",
    "material": "silver",
    "color": "brown",
    "price": "120.000 SEK",
    "categoryId": "woman",
    "featured": true
  },
  {
    "id": "Twenty-4 7300/1200R-001",
    "name": "HAPPY SPORT - 30MM AUTO RG/ST STRAP 2 DIA 3 RUBIES",
    "desc": "Stål/18K Roseguld - Silver/Guilloche",
    "image": "sass/img/watches/18270014_1.jpeg",
    "brand": "Chopard",
    "material": "bronze",
    "color": "yellow",
    "price": "150.000 SEK",
    "categoryId": "child",
    "featured": false
  },
  {
    "id": "279160",
    "name": "LADY-DATEJUST",
    "desc": "Oyster, 28 mm, Oystersteel",
    "image": "sass/img/watches/18270011_1.jpeg",
    "brand": "Rolex",
    "material": "silver",
    "color": "silver",
    "price": "45.000 SEK",
    "categoryId": "man",
    "featured": true
  },
  {
    "id": "126233",
    "name": "PATEK PHILIPPE",
    "desc": "Oyster, 36 mm, Oystersteel och gult guld",
    "image": "sass/img/watches/17531903_1.jpeg",
    "brand": "Rolex",
    "material": "gold",
    "color": "silver",
    "price": "200.000 SEK",
    "categoryId": "child",
    "featured": true
  },
  {
    "id": "DZ1961",
    "name": "Diesel Baby Chief",
    "desc": "This 32mm Baby Chief features a mirrored and negative display dial, digital movement and a gold-tone stainless steel bracelet.",
    "image": "sass/img/watches/18390031_1.jpeg",
    "brand": "Diesel",
    "material": "gold",
    "color": "pink",
    "price": "40.400 SEK",
    "categoryId": "woman",
    "featured": false
  }
];

let user = {
  name:"Axel Åhlin Andersson", 
  streetadress:"Skogsvägen 32", 
  zipCode:"19550",
  location: "Märsta",
  email: "axelaahlin@gmail.com",
  phoneNumber: "072 233 53 43",
  password: "axel"
};
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
localStorage.setItem("user", JSON.stringify(user));
localStorage.setItem("cart", JSON.stringify(fakeCart));

const userData = JSON.parse(localStorage.getItem("user"));
const cartData = JSON.parse(localStorage.getItem("cart"));

//If u are logged in the inputs are already done
if (userData){
  username.value = user.name;
  streetadress.value = user.streetadress;
  zip.value = user.zipCode;
  userlocation.value = user.location;
  email.value = user.email;
  phone.value = user.phoneNumber;
};


function drawCart (){
let totalprice = 0;
  for (let i = 0; i < cartData.length; i++) {
    let product = document.createElement("li");
    product.innerHTML = 
    `<div class="receipt-item">
        <img src="${cartData[i].image}" alt="bild på produkt">
     </div>
    <div>
      <p>${cartData[i].name}</p>
      <p>${cartData[i].price}</p>
    </div>
    `
    orderList.appendChild(product)

    let prodPrice = cartData[i].price.split(' ')[0];
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

drawCart();

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
<h3>Paketet kommer att skickas till: </h3>
<p>
${username.value} <br>
${streetadress.value} ${zip.value},${userlocation.value} <br>
${email.value} <br>
${phone.value}
</p>
</div>
`;
const receiptList = document.querySelector(".receipt-list");
let totalprice = 0;
for (let i = 0; i < cartData.length; i++) {
  let product = document.createElement("li");
  product.innerHTML = 
  `<div class="receipt-item">
      <img src="${cartData[i].image}" alt="bild på produkt">
   </div>
  <div>
    <p>${cartData[i].name}</p>
    <p>${cartData[i].price}</p>
  </div>
  `
  receiptList.appendChild(product)

  let prodPrice = cartData[i].price.split(' ')[0];
  prodPrice = prodPrice.replace('.', '');
  prodPrice = parseInt(prodPrice);
  totalprice += prodPrice;
};
let lastprice = document.createElement("h3");
lastprice.innerText = 
`
Totalbelopp: ${totalprice} SEK
`;
receiptList.appendChild(lastprice);
});