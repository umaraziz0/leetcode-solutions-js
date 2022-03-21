// https://leetcode.com/problems/score-of-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let stack = [],
    score = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      stack.push(score);
      score = 0;
    } else {
      score = stack.pop() + Math.max(1, score * 2);
    }

    console.log(score);
    console.log(stack);
  }

  return score;
};

console.log(scoreOfParentheses("(()(()))"));
