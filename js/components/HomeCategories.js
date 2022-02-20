import * as ProductRepository from "./ProductRepository.js";
<<<<<<< HEAD

const homeCategories = document.getElementById("categoriesHome");

=======
import { CreateProductView } from "./CreateProductView.js";

const homeCategories = document.getElementById("categoriesHome");
let featuredWrap = document.querySelector(".featured-products");
>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192
console.log(homeCategories);

function listCategoriesHome(list) {
  list.forEach((item) => {
    let elem = document.createElement("div");
    elem.classList.add("category-item");
    elem.innerHTML = `
            <div class="home-img-contain">
<<<<<<< HEAD
      		<img src="sass/${item.image}" alt="bakgrund klocka">
              </div>
              <div class ="home-text-container"
  				<h2 class="home-title">${item.name}</h2>
  				<p class="home-desc">${item.description}</p>
                  </div>
=======
      		    <img src="sass/${item.image}" alt="bakgrund klocka">
            </div>
            <div class ="home-text-container">
  				    <h2 class="home-title">${item.name}</h2>
  				    <p class="home-desc">${item.description}</p>
            </div>
>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192
      `;
    homeCategories.appendChild(elem);
  });
}

listCategoriesHome(await ProductRepository.getAllCategories());
<<<<<<< HEAD
=======

//Show Featured products
let productsFeatured = await ProductRepository.getFeaturedProduct();
productsFeatured.forEach((product) => {
  let element = CreateProductView(product);
  featuredWrap.appendChild(element);
});
>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192
