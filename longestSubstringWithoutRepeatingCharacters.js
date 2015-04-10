/*
Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.

@param {string} s
@return {number}
*/
var lengthOfLongestSubstring = function(s) {
  if( s.length === 0 ) {
      return 0;
  }
  var seen = {};
  var longest = current = start = 0;
    
  for( var i=0; i<s.length; i++ ) {
      if( seen[s.charAt(i)] === undefined || seen[s[i]] < start) {
          current += 1;
          seen[s.charAt(i)] = i;
        if( current > longest ) {
              longest = current;
        }    
      }else{
          start = seen[s.charAt(i)] + 1; 
          current = i - seen[s[i]];
          seen[s.charAt(i)] = i;
      }
  }
  return longest;
};