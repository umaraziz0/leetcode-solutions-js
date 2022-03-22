// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  if (s.length % 2 !== 0) return false;

  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];

    if (currChar in map) {
      stack.push(currChar);
    } else {
      let lastChar = stack.pop();

      if (map[lastChar] !== currChar) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
