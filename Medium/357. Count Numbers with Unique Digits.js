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