import * as ProductRepository from "./ProductRepository.js";
import { CreateProductView } from "./CreateProductView.js";
async function SearchResults() {
  const productsWrap = document.getElementById("products-list");
  const searchString = new URLSearchParams(location.search).get("searchText");
  const resultContainer = document.querySelector(".result-count-container");
  const resultNumber = document.querySelector(".amount-results");
  const searchWords = document.getElementById("search-words");

  let searchResults = await ProductRepository.searchProducts(searchString);
  searchWords.innerHTML = searchString;

  resultContainer.style.display = "block";
  if (searchResults.length === 0) {
    resultContainer.innerHTML = "No search results!";
  } else {
    resultNumber.innerHTML = searchResults.length;
  }
  searchResults.forEach((product) => {
    let element = CreateProductView(product);
    productsWrap.appendChild(element);
  });
}
SearchResults();
