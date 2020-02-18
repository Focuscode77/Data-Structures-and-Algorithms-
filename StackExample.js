// Arrays have all the functions of a stack
// This is a simple example on how to use stack!
var letters = [];

var word = "racecar"

var rword = "";
// Puts letters into the stack
for (var i = 0; i < word.length; i++) {

    letters.push(word[i]);


}
// Pops letters of the stack
for (var i = 0; i < word.length; i++) {

    rword += letters.pop();

}

if (rword === word) {

    console.log(word + 'is a palindorme');


} else {

    console.log(word + 'is not a palindorme')

}





