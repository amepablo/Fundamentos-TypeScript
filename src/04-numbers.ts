(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1';  // 281
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock)
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }
  // El NaN entra en el conjunto de Numbers

  let hex = 0xfff;
  console.log('hex', hex);  // hex 4095
  let bin = 0b1010;
  console.log('bin', bin);  // bin 10
// Reconoce formatos binarios y hexadecimal

const myNumber: number = 10;
// : number no es lo mismo que : Number
// Usar el primero
})()
