export async function getProductsByCategory(categoryId) {
  const productsResponse = await fetch("js/Products.json");
  const products = await productsResponse.json();
  if (categoryId === "all") {
    return products;
  }
<<<<<<< HEAD
=======

>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192
  return products.filter((item) => item.categoryId === categoryId);
}

export async function getCategoryById(id) {
  const categoriesResponse = await fetch("js/Categories.json");
  const categories = await categoriesResponse.json();
  return categories.find((category) => category.id === id);
}

export async function getAllCategories(id) {
  const categoriesResponse = await fetch("js/Categories.json");
  const categories = await categoriesResponse.json();
  return categories;
}
<<<<<<< HEAD
=======

//Get single products by Id
export async function getProductById(productId) {
  const productsResponse = await fetch("js/Products.json");
  const products = await productsResponse.json();
  return products.find((product) => product.id === productId);
}

//Get featured product

export async function getFeaturedProduct() {
  const productsResponse = await fetch("js/Products.json");
  const products = await productsResponse.json();
  return products.filter((product) => product.featured === true).slice(0, 3);
}

>>>>>>> ebd22d4885981c09bdec347fd3668be2149e2192
