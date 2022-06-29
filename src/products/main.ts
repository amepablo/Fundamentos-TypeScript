import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Product1',
  createdAt: new Date(1986, 2, 1),
  stock: 1
});

addProduct({
  title: 'Product2',
  createdAt: new Date(1986, 2, 1),
  stock: 1,
  size: 'L'
});
console.log(products);
const total = calcStock();
console.log(total);
