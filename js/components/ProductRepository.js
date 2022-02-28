export async function getAllProducts() {
  const productsResponse = await fetch("js/Products.json");
  const products = await productsResponse.json();
  return products;
}

export async function getProductsByCategory(categoryId) {
  let products = await getAllProducts();
  if (categoryId === "all") {
    return products;
  }

  return products.filter((item) => item.categoryId === categoryId);
}

export async function getCategoryById(id) {
  return (await getAllCategories()).find((category) => category.id === id);
}

export async function getAllCategories() {
  const categoriesResponse = await fetch("js/Categories.json");
  const categories = await categoriesResponse.json();
  return categories;
}

//Get single products by Id
export async function getProductById(productId) {
  let products = await getAllProducts();
  return products.find((product) => product.id === productId);
}

//Get featured product
export async function getFeaturedProduct() {
  let products = await getAllProducts();
  return products.filter((product) => product.featured === true).slice(0, 3);
}


async function getProductByBrand () {
	let products = await getAllProducts();

}

async function getProductByColor () {
	let products = await getAllProducts();
}


async function getProductByMaterial () {
	let products = await getAllProducts();
}


export async function searchProducts ( searchText ) {
  let products = await getAllProducts();
  let lowerCaseText = searchText.toLowerCase();

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerCaseText) ||
      product.brand.toLowerCase().includes(lowerCaseText) ||
      product.desc.toLowerCase().includes(lowerCaseText) ||
      product.color.toLowerCase().includes(lowerCaseText) ||
      product.material.toLowerCase().includes(lowerCaseText)
  );
}

