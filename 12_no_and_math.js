const score =100;
console.log(score)

const balance = new Number(100)      //we are already giving its type.

console.log(balance)
console.log(typeof balance)
console.log(balance.toString());
console.log(typeof balance)
console.log(typeof "balance")

console.log(balance.toFixed(2)); //for up to 2 decimal places  100.00

const Numberone= 23.8966

console.log(Numberone.toPrecision(3)) //23.9Numberone= 23.8966

const Numbertwo=123.8966;
console.log(Numbertwo.toPrecision(3)) //124

const Numberthree=1123.8966;
console.log(Numberthree.toPrecision(3)) //1.12e+3

const hundreds=10000000;
console.log(hundreds.toLocaleString()) //10,000,000
console.log(hundreds.toLocaleString('en-IN')) //1,00,00,000  The Indian standard  

let max_value= Number.MAX_VALUE;  //max value of number
let min_value= Number.MIN_VALUE;  //min value of number

//+++++++++++++++++++++++++++MATH+++++++++++++++++++++++++

console.log(Math.abs(-4))
console.log(Math.round(4.7))

console.log(Math.ceil(4.7))
console.log(Math.floor(4.7))

console.log(Math.min(4,3,2,1,7))

console.log(Math.max(4,3,2,1,7))

console.log(Math.random())
//gives a random val. b/w 1 and 0
console.log(Math.random()*10+1)
//gives a random val. b/w 10 and 1


const min = 10;
const max =20;

console.log(Math.floor(Math.random()*(max-min+1)+min))

/*formula for giving range b/w min. and max. and geting an integer val.