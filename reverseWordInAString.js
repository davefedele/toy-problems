// Given an input string, reverse the string word by word.
//
// For example,
// Given s = "the sky is blue",
// return "blue is sky the".
//
// Clarification:
// What constitutes a word?
// A sequence of non-space characters constitutes a word.
// Could the input string contain leading or trailing spaces?
// Yes. However, your reversed string should not contain leading or trailing spaces.
// How about multiple spaces between two words?
// Reduce them to a single space in the reversed string.
/**
 * @param {string} str
 * @returns {string}
 */
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim();
    
    var arr = str.split(' ');
    var arrNoSpaces = arr.filter(function(str) {
        return /\S/.test(str);
        });
        
    return arrNoSpaces.reverse().join(' ');     
};