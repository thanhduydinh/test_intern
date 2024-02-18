var reverse = function (x) {
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = -Math.pow(2, 31);

  let reversed = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);
    if (
      reversed > Math.floor(maxInt / 10) ||
      (reversed === Math.floor(maxInt / 10) && digit > 7)
    ) {
      return 0;
    }
    if (
      reversed < Math.floor(minInt / 10) ||
      (reversed === Math.floor(minInt / 10) && digit < -8)
    ) {
      return 0;
    }
    reversed = reversed * 10 + digit;
  }

  return reversed;
};
