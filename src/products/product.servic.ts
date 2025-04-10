import { Product } from "./product.model";

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
}

const calcStock = (): number => products.reduce((acum, prices) => acum + prices.stock, 0);

export {
  products,
  addProduct,
  calcStock
}
