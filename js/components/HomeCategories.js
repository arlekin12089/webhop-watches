import * as ProductRepository from "./ProductRepository.js";
import { CreateProductView } from "./CreateProductView.js";

const homeCategories = document.getElementById("categoriesHome");
let featuredWrap = document.querySelector(".featured-products");
const shopBtn = document.querySelector(".home-btn");

function listCategoriesHome(list) {
  list.forEach((item) => {
    let elem = document.createElement("div");
    elem.classList.add("category-item");
    elem.innerHTML = `
      <a href="product-list.html?category=${item.id}" class ="category-link">
            <div class="home-img-contain">
      		    <img src="sass/${item.image}" alt="bakgrund klocka">
            </div>
            <div class ="home-text-container">
  				    <h2 class="home-title">${item.name}</h2>
  				    <p class="home-desc">${item.description}</p>
            </div>
            </a>
      `;
    homeCategories.appendChild(elem);
  });
}

listCategoriesHome(await ProductRepository.getAllCategories());

//Show Featured products
let productsFeatured = await ProductRepository.getFeaturedProduct();
productsFeatured.forEach((product) => {
  let element = CreateProductView(product);
  featuredWrap.appendChild(element);
});
