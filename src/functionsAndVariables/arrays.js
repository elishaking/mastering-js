/**
 * TASK 1: Write a function which will take an array of
 * numbers and return the second lowest and second greatest numbers
 * @param {number[]} A
 */
function solution1(A) {
  // todo: implement solution here
  return [0, 0];
}

/**
 * TASK 2: Write a function which will take an array of
 * numbers and return the number with the most repititions
 * @param {number[]} A
 */
function solution2(A) {
  // todo: implement solution here
  return 0;
}

function main() {
  const A1 = [3, 1, 7, 8, 9, 0, 1, 20, 17];
  const y1 = solution1(A1);
  if (y1.join() !== [3, 17].join())
    console.error("TASK 1 Wrong Answer: Please implement a correct solution");
  else console.log("TASK 1 Correct, Welldone");

  const A2 = [1, 3, 4, 1, 5, 5, 7, 4, 1, 4, 2, 3, 4, 4, 9, 4, 13, 4, 4];
  const y2 = solution2(A2);
  if (y2 !== 4)
    console.error("TASK 2 Wrong Answer: Please implement a correct solution");
  else console.log("TASK 2 Correct, Welldone");
}

main();
