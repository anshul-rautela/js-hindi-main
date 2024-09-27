console.log(2>1)

//Dont compare diff. datatypes as it will generate umpredictable o/p
console.log(null>0)  //false
console.log(null=0)  //false
console.log(null>=0)  //true

//= and >= works diff. thats why we get unpredictable o/p, prefer avoiding these scenerios



//Strict check  === It checks the equality as well as the datatype of the value 

console.log(2===2);   //true;

console.log("2"===2);   //false;


