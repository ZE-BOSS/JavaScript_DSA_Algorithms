/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    if(str1 + str2 !== str2 + str1) return ""
    if(str1 === str2) return str1
    if(str1.length > str2.length) return gcdOfStrings(str1.substring(str2.length), str2)
    if(str2.length > str1.length) return gcdOfStrings(str2.substring(str1.length), str1)
    
};