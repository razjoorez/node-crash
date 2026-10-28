// const{generateRandomNumber, celciusToFahrenheit }= require('./utils')

// console.log(`generate random number : ${generateRandomNumber()}`)

// //console.log('hello node');


// console.log(`temp convert: ${celciusToFahrenheit(32)}`);


import  getPosts , {getPostsLength} from "./postController.js";

console.log(getPosts())
console.log(`posts length: ${getPostsLength()}`)