(() => {
  // Implicito
let productTitle = 'My amazing product';
// productTitle = null;
// productTitle = () => {};
// productTitle = 123;
productTitle = 'My amazing product changed';
console.log('productTitle', productTitle);

const productDescription = "bla bla bla bla bla";
console.log('productDescription', productDescription);

let productPrice = 100;
let isNew: boolean = false;

const summary = `
  Title: ${productTitle}
  Description: ${productDescription}
  Price: ${productPrice}
  isNew: ${isNew}
`;

console.log(summary);

const myString: string = '';

})()
