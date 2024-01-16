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

var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;

    let wordCount = {} 
    let result = true;

    for(let i = 0; i < word1.length; i++) {
        if(!word2.includes(word1[i])) {result = false; break}
        wordCount[word1[i]] = [0, 0]
    }

    for(let i = 0; i < word1.length; i++) {
        if(!result) break
        wordCount[word1[i]][0] = (wordCount[word1[i]][0] || 0) + 1
        wordCount[word2[i]][1] = (wordCount[word2[i]][1] || 0) + 1
    }

    if(!result) return false

    for(let word in wordCount) {
        if(wordCount[word][0] > 0 && wordCount[word][1] > 0) {
            if(wordCount[word][0] === wordCount[word][1]){
                delete wordCount[word]
            } else {
                wordCount[`0-${wordCount[word][0]}`] = (wordCount[`0-${wordCount[word][0]}`] || 0) + wordCount[word][0];
                wordCount[`1-${wordCount[word][1]}`] = (wordCount[`1-${wordCount[word][1]}`] || 0) + wordCount[word][1];
                delete wordCount[word];
            } 
        } 
    }

    for(let num in wordCount) {
        let [init, value] = num.split("-")
        let [aInx, bInx] = Object.keys(wordCount).filter(val => val === ("0-"+value) || val === ("1-"+value));

        if(wordCount[aInx] === wordCount[bInx]) continue;
        else {result = false; break}
    }

    return result
};

console.log(closeStrings("abc", "bca"))
console.log(closeStrings("a", "aa"))
console.log(closeStrings("cabbba", "abbccc"))
console.log(closeStrings("aabbcccddd", "abccccdddd"))
console.log(closeStrings("svotbsgqiqmeqjwdqqtkucrzqphqxqtqqlyfan", "aapyhufaaaalkqsvtjnaaoewxkrgsbsazadmci"))