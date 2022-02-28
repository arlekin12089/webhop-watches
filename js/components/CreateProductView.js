import { addProductToCart } from "./cart.js";

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
                  <a href="product-view.html?productId=${product.id}" class="product__link">
                    <i class="fa fa-search"></i>
                  </a>
                  <div class="addToCart product__link">
                    <i class="fa fa-shopping-cart"></i>
                  </div>
                </div>
              </div>
              <footer class="product__description center">
                <h4 class="name">${product.name}</h4>
                <p class="price">${product.price}</p>
              </footer>
`;
	elem.getElementsByClassName( "addToCart" )[0].addEventListener( "click", () => {
		addProductToCart( product.id );
	} );
  return elem;
}

export { CreateProductView };
