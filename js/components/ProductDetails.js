import * as ProductRepository from "./ProductRepository.js";
import { CreateProductView } from "./CreateProductView.js";

const productBrand = document.querySelector(".brand");
const productName = document.querySelector(".name");
const productDesc = document.querySelector(".desc");
const specValue = document.querySelector(".specValue");
const specColor = document.querySelector(".specColor");
const productPrice = document.querySelector(".price");
const productImage = document.querySelector(".product-image");
let html = document.getElementsByTagName("html")[0];
const queryString = new URLSearchParams(location.search);
const productId = queryString.get("productId");
if (productId === "" || productId === undefined || productId === null) {
  html.innerHTML = "Sorry";
}
let featuredWrap = document.querySelector(".featured-products");
let product = await ProductRepository.getProductById(productId);

productBrand.innerHTML = `${product.brand}`;
productName.innerHTML = `${product.name}`;
productDesc.innerHTML = `${product.desc}`;
specValue.innerHTML = `${product.material}`;
specColor.innerHTML = `${product.color}`;
productPrice.innerHTML = `${product.price}`;
productImage.src = `${product.image}`;

//Featured
let productsFeatured = await ProductRepository.getFeaturedProduct();
productsFeatured.forEach((product) => {
  let element = CreateProductView(product);
  featuredWrap.appendChild(element);
});
