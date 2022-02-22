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

localStorage.setItem("cart", JSON.stringify(fakeCart));
const cartData = JSON.parse(localStorage.getItem("cart"));

const cartList = document.querySelector(".cart-list");
const cartTotalPrice = document.querySelector(".cart-price");

//draws the items
function drawCart (){
    for (let i = 0; i < cartData.length; i++) {
      let product = document.createElement("li");
      product.innerHTML = 
      `<div class="cart-item">
          <img src="${cartData[i].image}" alt="bild på produkt">
       </div>
      <div class="item-info">
        <p>${cartData[i].name}</p>
        <p>${cartData[i].price}</p>
        <input class="counter" data-id="${cartData[i].id}" type="number" id="itemcounter" min="1" max="5" value="1">
       <button class="order-delete-btn">Ta bort</button> 
      </div>
      `; 
      cartList.appendChild(product)
    };
}
  drawCart();

  //all inputfields
  let ordercounter = document.querySelectorAll(".counter");

  //Adds eventlistener 
  ordercounter.forEach(event => {
    event.addEventListener("input",() => {
    let data = event.getAttribute("data-id")

    const currentCart = JSON.parse(localStorage.getItem("cart"));

    const rightinput = currentCart.find(event => {
      return event.id == data;
    })
    console.log(rightinput)
    }
  );
})
  

function checkPrice (){
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

  checkPrice();