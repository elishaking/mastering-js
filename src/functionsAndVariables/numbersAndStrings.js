/**
 * TASK 1: Write a function to reverse the number N
 * example: 34221 ---> 12243
 * @param {number} N
 */
function solution1(N) {
  //todo: implement solution here
  return 0;
}

/**
 * TASK 2: Write a function that accepts a string as a parameter
 * and finds the longest word within the string
 * @param {string} S
 */
function solution2(S) {
  //todo: implement solution here
  return "";
}

/**
 * TASK 3: Write a function that accepts a number as a parameter
 * and checks if the number is prime or not. Returns `true` if its
 * prime and `false` otherwise
 * @param {number} N
 */
function solution3(N) {
  //todo: implement solution here
  return true;
}

function main() {
  const N1 = 10293848493;
  const y1 = solution1(N1);
  if (y1 !== 39484839201)
    console.error("TASK 1 Wrong Answer: Please implement a correct solution");
  else console.log("TASK 1 Correct, Welldone");

  const S = "I love Software Engineering";
  const y2 = solution2(S);
  if (y2 !== "Engineering")
    console.error("TASK 2 Wrong Answer: Please implement a correct solution");
  else console.log("TASK 2 Correct, Welldone");

  const N2 = 18493;
  const y3 = solution3(N2);
  if (y3 !== true)
    console.error("TASK 3 Wrong Answer: Please implement a correct solution");
  else console.log("TASK 3 Correct, Welldone");
}
main();
