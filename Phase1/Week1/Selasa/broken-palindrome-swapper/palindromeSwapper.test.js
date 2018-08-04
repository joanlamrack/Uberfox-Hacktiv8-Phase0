const { test } = require("tape");

const palindromeSwapper = require("./palindromeSwapper");

test('Palindrome "arcecar" is true', t => {
  t.equal(palindromeSwapper("arcecar"), true);
  t.end();
});
test('Palindrome "racecar" is true', t => {
  t.equal(palindromeSwapper("racecar"), true);
  t.end();
});
test('Palindrome "recacar" is true', t => {
  t.equal(palindromeSwapper("recacar"), false);
  t.end();
});
