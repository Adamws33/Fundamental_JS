// function printInfo(firstName, lastName, title){
//   if (title==undefined){
//   return `My name is ${firstName} ${lastName}.`
//   }else{
//   return `My name is ${title} ${firstName} ${lastName}.`
//   }
// }
// console.log(printInfo('Adam', 'Smith',));
// console.log(printInfo('Adam', 'Smith','Mr.'));

// function printInfo(firstName, lastName, title){
//   if (title==undefined){
//   return `${firstName} ${lastName}`
//   }else{
//   return `${title} ${firstName} ${lastName}`
//   }
// }
console.log(`Hello, my name is ${printInfo("Adam", "Smith")}.`);
console.log(`Hello, my name is ${printInfo('Adam', 'Smith','Mr.')}.`);

function printInfo(firstName, lastName, title){
  return title ? `${title} ${firstName} ${lastName}` : `${firstName} ${lastName}`
}