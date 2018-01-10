// Use of double quotes:
// "i was born in Santa Maria California"
// "I\'ve lived in 3 states"
// "I like Europe"

// Use of single quotes
// 'single quotes are better in Jay\'s humble opinoion'
// 'They require less keystrokes.'
// 'Examples are here.'

// Nesting single inside double:
// "This is 'SUPER' awesome"
// "This allowes you to use the apostrophe (') can't"

// Nesting double inside single:
// 'Jay said, "I am so excited for lunch"'

// BAD
//'"hello'"
// CORRECT
// '"hello"'

// let tweet = 'Kanye is broke. No Joke!'

// console.log(tweet.toUpperCase())

// let family = 'my pup Guinness and my wife Danay are the beginning of my family';

// let house = 'MY WIFE AND I BOUGHT A HOUSE RECENTLY';

// let school = 'I am studying at eleven fifty';

// let work = 'i have choosen not to work while i study';
// let upperTweet = tweet.toUpperCase();
// let lowerTweet = tweet.toLowerCase();
// console.log(family.toUpperCase());
// console.log(house.toUpperCase());
// console.log(school.toLowerCase());
// console.log(work.toLowerCase());
// console.log (upperTweet);
// console.log (lowerTweet);

// Targeting specific charicters in a string:

let first = "quincy";
let last = "williams";

//console.log(first[1]); //will return the 2nd letter since 0 is the first i``n indexing

console.log(first[0]);
let firstUpper = first.charAt(0).toUpperCase().concat(first.slice(1)); //using a method
let lastUpper = last.charAt(0).toUpperCase()+last.slice(1);            //using a mathmatical problem
console.log(firstUpper);
console.log(lastUpper);
