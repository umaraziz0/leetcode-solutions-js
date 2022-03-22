//leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];
  // console.log(prefix);

  for (let i = 1; i < strs.length; i++) {
    // console.log(prefix);
    while (strs[i].indexOf(prefix) !== 0) {
      // console.log(strs[i]);
      // console.log(prefix);
      // console.log(strs[i].indexOf(prefix));
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return "";
      // console.log(prefix);
    }

    // console.log(prefix);
  }

  return prefix;
};

// console.log(longestCommonPrefix(["flower"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// const flow = "flow";

// console.log(flow.indexOf("flower"));
