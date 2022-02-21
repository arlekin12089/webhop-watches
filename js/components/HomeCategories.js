import * as ProductRepository from "./ProductRepository.js";


const homeCategories = document.getElementById("categoriesHome");


import { CreateProductView } from "./CreateProductView.js";

const homeCategories = document.getElementById("categoriesHome");
let featuredWrap = document.querySelector(".featured-products");
<<<<<<< HEAD
const shopBtn = document.querySelector(".home-btn");
=======

console.log(homeCategories);


const catString = new URLSearchParams(location.search).get("category");
>>>>>>> d1823d4b94d24c5103a8aabbe93b8ba9b6c49bbb

function listCategoriesHome(list) {
  list.forEach((item) => {
    let elem = document.createElement("div");
    elem.classList.add("category-item");
    elem.innerHTML = `
<<<<<<< HEAD
      <a href="product-list.html?category=${item.id}" class ="category-link">
            <div class="home-img-contain">
=======

            <div class="home-img-contain">

      		<img src="sass/${item.image}" alt="bakgrund klocka">
              </div>
              <div class ="home-text-container"
  				<h2 class="home-title">${item.name}</h2>
  				<p class="home-desc">${item.description}</p>
                  </div>

>>>>>>> d1823d4b94d24c5103a8aabbe93b8ba9b6c49bbb
      		    <img src="sass/${item.image}" alt="bakgrund klocka">
            </div>
            <div class ="home-text-container">
  				    <h2 class="home-title">${item.name}</h2>
  				    <p class="home-desc">${item.description}</p>
<<<<<<< HEAD
=======
            </div>

          <a href="product-list.html?category=${item.id}" class="category-link">
            <div class="home-img-contain" style = "background-image: url(sass/${item.image})">
              <div class ="home-text-container">
  				      <h2 class="home-title">${item.name}</h2>
  				      <p class="home-desc">${item.description}</p>
              </div>
>>>>>>> d1823d4b94d24c5103a8aabbe93b8ba9b6c49bbb
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

