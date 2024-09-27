const name = "hitesh"
const repoCount=20

//console.log(name+ repoCount+"value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)  //better method

const gameName =new String('Hitesh-sh')

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())  //but original string same hi rahegi 
console.log(gameName.charAt(2))    //t
console.log(gameName.indexOf('t'))  //2


const newString = gameName.substring(0,4)  //0 to 3 included (hite)
const anotherString = gameName.slice(-4,-1) //h-s //can have -ve values
console.log(newString)
console.log(anotherString)

const newString1= "       hitesh    "
console.log(newString1.trim())   //hitesh   //removes spaces and line terminator

const url ="https://hitesh.com/hitesh%20/chaudhary"

console.log(url.replace('hitesh','anshul'))  //https://anshul.com/hitesh%20/chaudhary
console.log(url.replaceAll('hitesh','anshul'))    //https://anshul.com/anshul%20/chaudhary


console.log(url.includes('hitesh'))  //true //url me hitesh included hai

console.log(gameName.split('-'))    //split string on basis of '-' and return in from of array
const gameparts= gameName.split('-')
console.log(gameparts[0])  //Hitesh
