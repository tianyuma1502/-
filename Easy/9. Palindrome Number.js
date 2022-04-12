/**
 * @param {number} x
 * @return {boolean}
 *
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 *
 * For example, 121 is a palindrome while 123 is not.
 *
 */
var isPalindrome = function(x){
    if(x < 0) return false;
    if(x < 10) return true;
    var num = x;
    var rev = 0;
    while(num > 0){
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev === x;
};

