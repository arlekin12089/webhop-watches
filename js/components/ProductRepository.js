export async function getProductsByCategory(categoryId) {
  const productsResponse = await fetch("js/Products.json");
  const products = await productsResponse.json();
  if (categoryId === "all") {
    return products;
  }
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
