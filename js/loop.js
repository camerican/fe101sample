// 2. Write a function that takes an input, x, and prints out a triangle with x rows made out of star characters.

// For example, if x = 3, it would print out 3 rows - the first would have 1 star, the second would have 3 stars, and the third would have 5 stars, like this:

// * 
// ***
// ***** 

// If x = 4, it would print out 4 rows - having 1, 3, 5, and 7 stars, respectively:

// function starTree( x ) {
//   for( var i = 1; i <= parseInt(x); i++ ) {
//     console.log( "*".repeat(i) );
//   }
// }

function starTree( x ) {
  for( var i = 1; i <= x; i+=1 ) {
    console.log( " ".repeat(x-i) + "*".repeat(1+2*(i-1)) );
  }
}
//if x = 3...
  * //2 spaces
 *** //1 space
***** //



