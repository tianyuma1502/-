/**
 * @param {number} n
 * @return {number}
 * Example 1:
 *
 * Input: n = 2
 * Output: 91
 * Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
 *
 * Example 2:
 *
 * Input: n = 0
 * Output: 1
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 10;
    let prev = 10;
    let curr = 9
    for (let i = 9; --n>0; i--) {
        prev +=curr *= i;
    }
    return prev;
};

console.log(countNumbersWithUniqueDigits(8))

/**
 * f(0)=1
 * f(1)=10
 * f(2)=9*9+f(1)
 * f(3)=9*9*8+f(2)
 * f(4)=9*9*8*7+f(3)
 * f(n)=9*9*8*7*6+f(n-1)
 * f(n)=9*(9-0)*(9-1)*(9-2)*(9-3)*(9-n)
 * f(n)=9*(n--)    */
