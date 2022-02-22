import * as ProductRepository from "./ProductRepository.js";
import { CreateProductView } from "./CreateProductView.js";

export function ProductList () {
  const queryString = new URLSearchParams(location.search);
  const qsCategory = queryString.get("category");
  const categoryName = document.getElementById("category-name");
  const categoryMenuItem = document.getElementById("categoryMenuItem");
  const heroWrapper = document.getElementById( "hero-wrap" );
  const productsWrap = document.getElementById( "products-list" );
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

    let productsList = await ProductRepository.getProductsByCategory( qsCategory );

    productsList.forEach((product) => {
      let element = CreateProductView(product);
      element.getElementsByClassName( "addToCart" )[0].addEventListener( "click", () => {
        CartRepository.addProductToCart( product.id );
      } );
      productsWrap.appendChild(element);
    } );
  }
  getProducts();

  //Search inside category
  inputForm.addEventListener( "submit", e => {
      e.preventDefault();
    },
    false
  );

  inputForm.addEventListener( "keyup", async ( e ) => {
      e.preventDefault();
    let searchResults = await ProductRepository.searchProducts( searchInput.value );
      if (searchResults.length === 0) {
        productsWrap.innerHTML = `<h3 class="filter-error">
       Sorry, no products matched your search! :( 
       </h3>`;
        productsWrap.classList.add("error");
      } else {
        productsWrap.innerHTML = "";
        searchResults.forEach((product) => {
          let element = CreateProductView(product);
          productsWrap.appendChild(element);
        });
      }
    },
    false
  );
}

export default ProductList();

ProductList();