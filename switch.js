let position = "Cook";
let payRate;
let amountOfWork = "iNsane";
let hoursWorked;

switch(position.toLowerCase()){
  case "cashier":
    payRate=8;
    break;
  case "cook":
    payRate=10;
    break;
  case "manager":
    payRate=14;
    break;
  case "owner":
    payRate=50;
    break;
  default:
    payRate=0;
  }
switch(amountOfWork.toLowerCase()){
  case "none":
    hoursWorked=0;
    break;
  case "little":
    oursWorked=10;
    break;
  case "part-time":
    hoursWorked=20;
    break;
  case "medium":
    hoursWorked=30;
    break;
  case "full-time":
    hoursWorked=40;
    break;
  case "insane":
    hoursWorked=50;
    break;
  default:
    hoursWorked=0;
  }
  console.log(`As a ${position} I will make $${payRate} per hour. I work ${hoursWorked} hours per week, so I earn $${hoursWorked*payRate} weekly.`)