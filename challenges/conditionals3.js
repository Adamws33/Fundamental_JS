let orderTotal = 120;
let limitForFreeShipping = 100;
let discounted = true;

if (orderTotal<limitForFreeShipping && discounted){
  console.log("You need to pay for shipping");
}else{
  console.log("You will have free shipping");
}
