/*Write a JavaScript function to check if a string is a palindrome (same forward and backward).
👉 Example:

"madam" → ✅ Palindrome

"hello" → ❌ Not a Palindrome*/
function checkPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    if (reversed === str) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

console.log(checkPalindrome("madam"));  
console.log(checkPalindrome("hello")); 