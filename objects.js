let myCar = {
  make: 'Saturn',
  model: 'Aura',
  miles: 180000,
  showInfo: function(){
    console.log(myCar.make, myCar.model)
  },
  drive: function (miles) {
    myCar.miles+=miles
    console.log(`You have driven ${miles} miles, your new mileage is ${myCar.miles}.`)
  }
}



myCar.drive(500)

