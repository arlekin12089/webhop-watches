//pass single product
function CreateProductView(product) {
  let elem = document.createElement("article");
  elem.classList.add("product");
  elem.innerHTML = `
              <div class="product__photo">
                <img
                  src="${product.image}"
                  alt="${product.image}"
                />
                <div class="product__icon">
                  <a href="product-view.html?productId=${product.id}" target="_blank" class="product__link">
                    <i class="fa fa-search"></i>
                  </a>
                  <button class="addToCard product__link">
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <footer class="product__description center">
                <h4 class="name">${product.name}</h4>
                <p class="price">${product.price}</p>
              </footer>
`;
  return elem;
}

export { CreateProductView };
