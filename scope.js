let outside = 'Hey I am outside!'

function doSomething(){
  let inside='Hey I am inside'
  console.log(inside, outside)
  
  function doAnotherThing(){
    let deepInside='i am inside a function'
    console.log(deepInside, inside, outside)
  }
  doAnotherThing()
}
doSomething();
// console.log(inside, outside)