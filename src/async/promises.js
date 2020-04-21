const fetch = require("node-fetch").default;
const posts = require("../../data/posts");
const fs = require("fs");
const { promisify } = require("util");
const promiseReadFile = promisify(fs.readFile);
const path = require("path");

/**
 * TASK 1: Write a function to return a promise that resolves to
 * a list of posts from this URL: https://jsonplaceholder.typicode.com/posts
 */

/**
 * Returns a promise posts from the passed url
 * @param {string} url
 * @returns {Promise}
 */
function getPosts(url) {
  //todo: implement solution
  return Promise.resolve();
}

/**
 * TASK 2: Implement a function using async/await that works exactly like
 * the above function
 */

/**
 * Returns resolved data ==> packaged in a Promise
 *
 * @param {string} url
 * @returns {Promise}
 */
async function getPostsAsync(url) {
  //todo: implement solution
}

/**
 * TASK 3: Implement a function to read the file: `read.txt`
 * in this directory
 */

/**
 * Returns the text contained within `read.txt`
 */

async function readFile() {
  //todo: implement solution
  return null;
}
//todo: implement solution

function main() {
  getPosts("https://jsonplaceholder.typicode.com/posts").then((postsRes) => {
    if (postsRes.toString() === posts.toString())
      console.log("TASK 1: Correct, Welldone");
    else
      console.log("TASK 1: Wrong Answer: Please implement a correct solution");
  });

  getPostsAsync("https://jsonplaceholder.typicode.com/posts").then(
    (postsRes) => {
      if (postsRes.toString() === posts.toString())
        console.log("TASK 2: Correct, Welldone");
      else
        console.log(
          "TASK 2: Wrong Answer: Please implement a correct solution"
        );
    }
  );

  readFile().then((fileContent) => {
    if (fileContent === "Hello, World")
      console.log("TASK 3: Correct, Welldone");
    else
      console.log("TASK 3: Wrong Answer: Please implement a correct solution");
  });
}

main();
