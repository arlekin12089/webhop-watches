import * as ProductRepository from "./ProductRepository.js";

const homeCategories = document.getElementById("categoriesHome");

console.log(homeCategories);

function listCategoriesHome(list) {
  list.forEach((item) => {
    let elem = document.createElement("div");
    elem.classList.add("category-item");
    elem.innerHTML = `
      		<img src="sass/${item.image}" alt="bakgrund klocka">
  				<h2 class="title">${item.name}</h2>
  				<p class="desc">${item.description}</p>
      `;
    homeCategories.appendChild(elem);
  });
}

listCategoriesHome(await ProductRepository.getAllCategories());
