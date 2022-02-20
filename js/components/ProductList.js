import * as ProductRepository from "./ProductRepository.js";
<<<<<<< HEAD

function ProductList() {
=======
import { CreateProductView } from "./CreateProductView.js";
export function ProductList() {
>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192
  const queryString = new URLSearchParams(location.search);
  const qsCategory = queryString.get("category");
  const categoryName = document.getElementById("category-name");
  const categoryMenuItem = document.getElementById("categoryMenuItem");
  const heroWrapper = document.getElementById("hero-wrap");
<<<<<<< HEAD

  function listProducts(listProducts) {
    listProducts.forEach((item) => {
      let elem = document.createElement("article");
      elem.classList.add("product");
      elem.innerHTML = `
              <div class="product__photo">
                <img
                  src="sass/${item.image}"
                  alt="${item.image}"
                />
                <div class="product__icon">
                  <a href="product-view.html?productId=${item.id}" target="_blank" class="product__link">
                    <i class="fa fa-search"></i>
                  </a>
                  <button class="addToCard product__link">
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <footer class="product__description center">
                <h4 class="name">${item.name}</h4>
                <p class="price">${item.price}</p>
              </footer>
        `;
      productsWrap.appendChild(elem);
    });
  }
=======
  const productsWrap = document.getElementById("products-list");
>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192

  function changeTitle(title) {
    categoryName.innerHTML = title;
  }

  async function getProducts() {
    let category = await ProductRepository.getCategoryById(qsCategory);
    changeTitle(category.name);
    categoryMenuItem.innerHTML = category.name;
    heroWrapper.style.backgroundImage = "url(" + category.backgroundImage + ")";
<<<<<<< HEAD
    listProducts(await ProductRepository.getProductsByCategory(qsCategory));
=======

    let productsList = await ProductRepository.getProductsByCategory(
      qsCategory
    );

    productsList.forEach((product) => {
      let element = CreateProductView(product);
      productsWrap.appendChild(element);
    });
>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192
  }
  getProducts();
}

<<<<<<< HEAD
export default ProductList();
=======
ProductList();
>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192
