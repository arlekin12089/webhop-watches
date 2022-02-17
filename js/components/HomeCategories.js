import * as ProductRepository from "./ProductRepository.js";

const homeCategories = document.getElementById("categoriesHome");

console.log(homeCategories);

function listCategoriesHome(list) {
  list.forEach((item) => {
    let elem = document.createElement("div");
    elem.classList.add("category-item");
    elem.innerHTML = `
            <div class="home-img-contain">
      		<img src="sass/${item.image}" alt="bakgrund klocka">
              </div>
  				<h2 class="home-title">${item.name}</h2>
  				<p class="home-desc">${item.description}</p>
      `;
    homeCategories.appendChild(elem);
  });
}

listCategoriesHome(await ProductRepository.getAllCategories());
