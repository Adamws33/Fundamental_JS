//arrow functions will change how we write a function.  

// // var ninjaGreeting=function(){
// //   console.log("hiiiiiiiya");
// // };
// // ninjaGreeting();

// we dont need the word function any more. // leave in the parenthasis to name an input and add in the arrow after

// // var ninjaGreeting = () => {
// //   console.log("hiiiiiiiya");
// // };
// // ninjaGreeting();

// When you have only one line of code as we do, you can remove the curlies and place it on one row. 
//this is - function ninjaGreeting('nothing needed') prints to console. Hiiiiiiiiiya.

// // var ninjaGreeting = () => console.log("hiiiiiiiya");
// // ninjaGreeting();

// with parameter - lable what to name the input and then use within the function

// // var ninjaGreeting = (name) => console.log(`hiiiiiiiya ${name}`);
// // ninjaGreeting("Adam");

// with just one parameter you can remove the paren. 

var ninjaGreeting = name => console.log(`hiiiiiiiya ${name}`);
ninjaGreeting("Adam");

//this statements only refer to the code block they are in.  once a new code block is created they are no longer in the precious code block. 
//below the function will send "Adam chopped the enemy".  However if we did not set _this = this before the second function then the name would
//not populate in the cosole when calling this since it would refer to the functions its in.  

//TO BE RUN IN HTML

//This will work since the _this is before the sencond function it is able to set the variable _this to be equal to this which resides in the 
//top half of the function before the 2nd function.  BUT! there is an easier way. 

{/* <script>
window.onload = function(){
  
  let ninja ={
    name:'Adam',
    chop(x){
      let _this = this
      window.setInterval(function(){
        if(x>0) {
          console.log(`${_this.name} chopped the enemy`)
          x--
        }
      }, 1000)
  }
};
ninja.chop(5)
}  </script> */}

// with an arrow function we do not have to declare a new function and therefore this will still refer to the whole block.  
  <script>
  window.onload = function(){
    
    let ninja ={
      name:'Adam',
      chop(x){
        let _this = this
        window.setInterval( () => {
          if(x>0) {
            console.log(`${_this.name} chopped the enemy`)
            x--
          }
        }, 1000)
    }
  };
  ninja.chop(5)
  }
    </script>

