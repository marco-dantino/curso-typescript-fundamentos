import { addProduct, calcStock, products } from './product.servic';

addProduct({
  title: "P1",
  createdAt: new Date,
  stock: 12
});
addProduct({
  title: "P2",
  createdAt: new Date,
  stock: 14,
  size: "L"
});

const total = calcStock();

console.log(products);
console.log(total);
