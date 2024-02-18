var reverseWords = function (s) {
  const words = s.split(" ");
  const filteredWords = words.filter((word) => word !== "");
  const reversedWords = filteredWords.reverse();

  return reversedWords.join(" ");
};
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
