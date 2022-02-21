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

const user = {
  name:"Axel Åhlin Andersson", 
  streetadress:"Skogsvägen 32", 
  zipCode:"19550",
  location: "Märsta",
  email: "axelaahlin@gmail.com",
  phoneNumber: "072 233 53 43",
  password: "axel"
};

const username = document.getElementById("name-input");
const streetadress = document.getElementById("adress-input");
const zip = document.getElementById("zip-input");
const userlocation = document.getElementById("ort-input");
const email = document.getElementById("email-input");
const phone = document.getElementById("phone-input");

localStorage.setItem("user", JSON.stringify(user))

const data = JSON.parse(localStorage.getItem('user'));
console.log(data);

if (user){
  username.value = user.name;
  streetadress.value = user.streetadress;
  zip.value = user.zipCode;
  userlocation.value = user.location;
  email.value = user.email;
  phone.value = user.phoneNumber;
}