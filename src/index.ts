"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019.05.12
 * @modified 2020-09-19
 *
 * @description APP_ENV Genarator
 * @augments
 * @example node env-generator.js env=dev
 * @example ane env=dev
 * @link
 * @solutions
 *
 */

// const log = console.log;

const fs = require("fs");

// const filename = "../env.js";
const filename = "./env.js";

let env = ``;

const args = process.argv.slice(2);
if (args[0]) {
  env = args[0].substring(4);
} else {
  // default
  env = `dev`;
}

const APP_NODE_ENV = () => {
  console.log(`filename =`, filename);
  fs.open(filename, "r", (err, fd) => {
    console.log("APP_ENV =", env);
    if (err) {
      console.log("APP_ENV Error", err);
      fs.writeFile(filename, `const APP_ENV = "${env}";\nexport default APP_ENV;`, (err, fd) => {
        if (err) {
          console.log(`writeFile err =`, err);
        }
      });
    } else {
      console.log("APP_ENV OK");
      fs.writeFile(filename, `const APP_ENV = "${env}";\nexport default APP_ENV;`, (err, fd) => {
        if (err) {
          console.log(`writeFile err =`, err);
        }
      });
    }
  });
};

const ANE = APP_NODE_ENV;

// export default ANE;
module.exports = ANE;


