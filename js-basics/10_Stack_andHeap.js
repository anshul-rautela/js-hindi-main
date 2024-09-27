//****************************
/*
Stack
primitive type
(copy of data)

Heap
non-primitive
(refrence of data)

*/

let a ="hello-world" //primitive -> stack
let b = a   //b me a ki copy gayi hai
b ="this_new_val"

let user ={   //object ->heap  me jayega 
    email:"user@gmail.com",
    upi:"user@ybl"
}

let user2  = user  //refrece milega
user2.email="hitesh@gmail.com"
console.log(user.email)      //hitesh@gmail.com
console.log(user2.email)     //hitesh@gmail.com