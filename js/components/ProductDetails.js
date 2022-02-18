import * as ProductRepository from "./ProductRepository.js";

const queryString = new URLSearchParams(location.search);
const productId = queryString.get("productId");
const productBrand = document.querySelector(".brand");
const productName = document.querySelector(".name");
const productDesc = document.querySelector(".desc");
const specValue = document.querySelector(".specValue");
const specColor = document.querySelector(".specColor");
const productPrice = document.querySelector(".price");
const productImage = document.querySelector(".product-image");
let product = await ProductRepository.getProductById(productId);

productBrand.innerHTML = `${product.brand}`;
productName.innerHTML = `${product.name}`;
productDesc.innerHTML = `${product.desc}`;
specValue.innerHTML = `${product.material}`;
specColor.innerHTML = `${product.color}`;
productPrice.innerHTML = `${product.price}`;
productImage.src = `${product.image}`;
