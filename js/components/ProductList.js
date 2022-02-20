import * as ProductRepository from "./ProductRepository.js";
import { CreateProductView } from "./CreateProductView.js";
export function ProductList() {
  const queryString = new URLSearchParams(location.search);
  const qsCategory = queryString.get("category");
  const categoryName = document.getElementById("category-name");
  const categoryMenuItem = document.getElementById("categoryMenuItem");
  const heroWrapper = document.getElementById("hero-wrap");
  const productsWrap = document.getElementById("products-list");
  const searchInput = document.getElementById("search-input");
  const inputForm = document.querySelector(".input-form");

  function changeTitle(title) {
    categoryName.innerHTML = title;
  }

  async function getProducts() {
    let category = await ProductRepository.getCategoryById(qsCategory);
    changeTitle(category.name);
    categoryMenuItem.innerHTML = category.name;
    heroWrapper.style.backgroundImage = "url(" + category.backgroundImage + ")";

    let productsList = await ProductRepository.getProductsByCategory(
      qsCategory
    );

    productsList.forEach((product) => {
      let element = CreateProductView(product);
      productsWrap.appendChild(element);
    });
  }
  getProducts();

  
}

ProductList();
