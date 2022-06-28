(() => {
  // Forma implicita / inferida
  let isEnable = true;
  // isEnable = 'as';
  // isEnable = 1212;
  isEnable = false;

  // Forma explicita
  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  // Otra manera de hacer un if
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

    const myBoolean: boolean = true;

})()
