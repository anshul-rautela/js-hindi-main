let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toTimeString())

/*
Wed Sep 25 2024 09:43:07 GMT+0530 (India Standard Time)
Wed Sep 25 2024
2024-09-25T04:13:07.320Z
9/25/2024
09:43:07 GMT+0530 (India Standard Time)
*/

console.log(typeof mydate)//object

let myCreatedDate= new Date(2023,0,23)  //months start from 0

console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023


let mynewCreatedDate=new Date(2023,0,23,6,3)
console.log(mynewCreatedDate.toLocaleString())//1/23/2023, 6:03:00 AM


let mynCreatedDate=new Date("01-14-2023") //mm-dd-yy
let mnCreatedDate=new Date("2023-01-14") //yy-mm-dd

console.log(mynCreatedDate.toLocaleString())
console.log(mnCreatedDate.toLocaleString())  // mm/dd//yyyy
/*mm-dd-yy me 1st se month start hota hai
but(yy,mm,dd) me 0 se start hota hai
*/


let myTimeStamp = Date.now();
console.log(myTimeStamp);  //1727405094849    1st jan. 1970 se abhi tak ke miliseconds

console.log(myCreatedDate.getTime());  //comparison of 2 dates

console.log(Math.floor(Date.now()/1000));// to convert into seconds

let newDate = new Date();
console.log(newDate);

console.log(newDate.getMonth());  //8     month starting from 0

console.log(newDate.getDay());    



const a_day = newDate.toLocaleString('default',{
    weekday:"long",
})


console.log(a_day);     //// Outputs: "Friday"

