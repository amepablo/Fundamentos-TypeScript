(() => {
  let userId: string | number | boolean;
  userId = 1212;
  userId = 'asasa' ;

  // El tipado se vuelve dinamico depende el resultado de la sentencia
  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('Pablo');
  greeting(123.3254325235);
})();
