(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login('pablo@pablo.com', '12424241');
  login({
    email: 'pablo@pablo.com',
    password: 234
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = [];

  const addProduct = (
    data: {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    }
  ) => {
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

  console.log(products)

})();
