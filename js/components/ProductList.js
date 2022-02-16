function ProductList() {
  const queryString = new URLSearchParams(location.search);
  const qsCategory = queryString.get("category");
  const categoryName = document.getElementById("category-name");
  const productsWrap = document.getElementById("products-list");
  const categoryMenuItem = document.getElementById("categoryMenuItem");
  const heroWrapper = document.getElementById("hero-wrap");

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
                  <a href="#" target="_blank" class="product__link">
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

  function changeTitle(title) {
    categoryName.innerHTML = title;
  }

  async function getProducts() {
    if (qsCategory === "all") {
      changeTitle("Alla klockor");
      categoryMenuItem.innerHTML = "Alla klockor";
      heroWrapper.style.backgroundImage =
        "url('sass/img/watches/covers/unisex-cover.jpeg')";
    } else {
      const categoriesResponse = await fetch("js/Categories.json");
      const categories = await categoriesResponse.json();
      let findCategory = categories.find(
        (category) => qsCategory === category.id
      );
      changeTitle(findCategory.name);
      categoryMenuItem.innerHTML = findCategory.name;
      console.log(findCategory.backgroundImage);
      heroWrapper.style.backgroundImage =
        "url(" + findCategory.backgroundImage + ")";
    }
    const productsResponse = await fetch("js/Products.json");
    const products = await productsResponse.json();

    if (qsCategory === "all") {
      listProducts([...products]);
    } else {
      let filteredProducts = products.filter(
        (item) => item.categoryId === qsCategory
      );
      listProducts([...filteredProducts]);
    }
  }

  getProducts();
}


export default ProductList();
