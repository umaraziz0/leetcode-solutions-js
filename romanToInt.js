// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i += 1) {
    const current = dictionary[s[i]];
    const next = dictionary[s[i + 1]];

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("XXVII"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
