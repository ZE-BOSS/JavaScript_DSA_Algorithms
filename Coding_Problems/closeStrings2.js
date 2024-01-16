// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
 

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

// This is a more effiecient code on closeStrings
var closeStrings = function(word1, word2) {
    const frequency1 = new Array(26).fill(0);
    const frequency2 =new Array(26).fill(0);

    for(let letter of word1)
        frequency1[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let letter of word2)
        frequency2[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let index=0; index<26; index++){
        if(frequency1[index] == 0 && frequency2[index] != 0)
            return false;
        if(frequency1[index] != 0 && frequency2[index] == 0)
            return false;
    }

    frequency1.sort((a, b) => a - b)
    frequency2.sort((a, b) => a - b)

    return JSON.stringify(frequency1) === JSON.stringify(frequency2);
};

console.log(closeStrings("abc", "bca"))
console.log(closeStrings("a", "aa"))
console.log(closeStrings("cabbba", "abbccc"))
console.log(closeStrings("aabbcccddd", "abccccdddd"))
console.log(closeStrings("svotbsgqiqmeqjwdqqtkucrzqphqxqtqqlyfan", "aapyhufaaaalkqsvtjnaaoewxkrgsbsazadmci"))