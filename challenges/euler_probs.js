// https://projecteuler.net/archives

// problem 1 Multiples of 3 and 5
// let total = 0;

// for (i=1;i<1000;i++){
//     if(i%3||i%5===0){
//       total+=i;
//     }
// }
// console.log(total);

// Problem 2 By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let num = 1;
let num2 = 1;
let fib = 0;
let total = 0;

while (fib<4000000){
  fib=num+num2;
  num=num2;
  num2=fib;
  if(fib%2==0){
    total+=fib;
  }
}
console.log(total);
