// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
//
// A word is a maximal substring consisting of non-space characters only.
//
//
//
//     Example 1:
//
// Input: s = "Hello World"
// Output: 5
// Example 2:
//
// Input: s = " "
// Output: 0

var lengthOfLastWord = function(s) {
    let  n = s.trim().split(" ");
    return  n[n.length - 1].length;
};

// in ES6

const lengthOfLastWord = (s)=> s.trim().split(" ").pop().length;

console.log(lengthOfLastWord("Hello World"));