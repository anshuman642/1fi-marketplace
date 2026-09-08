import { products } from "../data/product";

export const getProducts = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return products;
  } catch (error) {
    throw new Error("Failed to load products");
  }
};

export const getProductById = async (id) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const product = products.find(
      (item) => item.id === Number(id)
    );

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  } catch (error) {
    throw new Error(
      error.message || "Failed to load product"
    );
  }
};
