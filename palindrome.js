function palindrome(str) {
    // Step 1: Remove non-alphanumeric characters
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '');
  
    // Step 2: Convert to lowercase
    const lowercaseStr = cleanStr.toLowerCase();
  
    // Step 3: Check if the string is equal to its reverse
    const reversedStr = lowercaseStr.split('').reverse().join('');
    
    return lowercaseStr === reversedStr;
  }
  
  palindrome("eye");