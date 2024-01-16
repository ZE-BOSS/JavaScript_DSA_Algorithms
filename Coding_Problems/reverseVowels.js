// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowel = "aeiouAEIOU";
    let allVowel = [], allIndex = []
    s = s.split("")

    for(let i = 0; i < s.length; i++) {
        if(vowel.includes(s[i])) {
            allVowel.push(s[i])
            allIndex.push(i)
        }
    }

    allVowel = allVowel.reverse();

    for(let i = 0; i < allVowel.length; i++) {
        s[allIndex[i]] = allVowel[i]
    }

    return s.join("")
};

console.log(reverseVowels("hello"))
console.log(reverseVowels("leetcode"))
console.log(reverseVowels("ai"))
console.log(reverseVowels("race car"))