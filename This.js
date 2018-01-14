// And when a function executes, it gets the this property—a variable with the value of the object that invokes the function
//  where this is used.

let myCar = {
  make: 'Saturn',
  model: 'Aura',
  miles: 180000,
  showInfo: function(){
    return(`${myCar.make} ${myCar.model}`);
  },
  type: function(){
    console.log(`My car is a ${this.showInfo()}.  It has ${this.miles} miles, so it might be time for something new.`);
  },
}



myCar.type()

  // drive: function (miles) {
  //   myCar.miles+=miles
  //   console.log(`You have driven ${miles} miles, your new mileage is ${myCar.miles}.`)
  // }

