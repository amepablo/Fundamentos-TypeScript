(()=>{
  let myDinamicVar: any;
   myDinamicVar = 100;
   myDinamicVar = {};
   myDinamicVar = '';

   myDinamicVar = 'Hola';
   const rta = (myDinamicVar as string).toLowerCase();  // Cast
   console.log(rta);

   myDinamicVar = 1212;
   const rta2 = (<number>myDinamicVar).toFixed(); // Cast
   console.log(rta2);
})()
