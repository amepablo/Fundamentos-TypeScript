(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: any[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

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

  products.push({
    title: 'Product2',
    createdAt: new Date(1986, 2, 1),
    stock: 1,
    size: 'L'
  });

})();
