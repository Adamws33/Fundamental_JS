//Fizz Buzz - for each number 1-100 if it is a multiple of 3 print fizz if its a multiple of 5 print buzz if its multiple of both print fizzbuzz

//for loop

let i=0;

for(i=0;i<=100;i++){
  if(i%3==0&&i%5==0){ // or i%15==0 since anything that is a factor of 3 and 5 must be a factor of 15 too
    console.log('fizzbuzz');
  }else if(i%3==0){
    console.log("fizz");
  }else if(i%5==0){
    console.log("buzz");
  }else{
    console.log(i);
  }
}

//while loop 
i=0;

while(i<=100){
  if(i%3==0&&i%5==0){
    console.log('fizzbuzz')
  }else if(i%3==0){
    console.log("fizz");
  }else if(i%5==0){
    console.log("buzz");
  }else{
    console.log(i);
  }
  i++;
}

//Ternary
for(i=0;i<=100;i++){
  console.log(
    i%15==0?
      'fizzbuzz':
      i % 5==0?
          'buzz':
          i%3==0?
            'fizz':
           i
  )
}