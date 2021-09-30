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

const args = process.argv.slice(2);

// let env = ``;
// if (args[0]) {
//     env = args[0].substr(4);
// }  else {
//     // default
//     env = `dev`;
// }

let key = "";
let env = "";
if (!args[0]) {
  args[0] = "";
} else {
    console.log();
    // env = args[0].substr(4);
    const tempArr = args[0].split('=');
    // key = tempArr[0] ?? 'APP_ENV';
    key = tempArr[0] || 'APP_ENV';
    env = tempArr[1];
}

const defaultTemplate = `
// default
const ${key} = "${env}";\n
export default ${key};\n
`;

const envTemplate = `
// 🎉
const ${key} = "${env}";\n
export default ${key};\n
`;

const APP_NODE_ENV = () => {
    // console.log(`filename =`, filename);
    fs.open(filename, "r", (err, fd) => {
        // console.log("APP_ENV =", env);
        if (err) {
            // console.log("APP_ENV Error", err);
            fs.writeFile(filename, defaultTemplate, (err, fd) => {
                if(err) {
                    console.log(`writeFile err =`, err);
                }
            });
        } else {
            // console.log("APP_ENV OK");
            fs.writeFile(filename, envTemplate, (err, fd) => {
                if(err) {
                    console.log(`writeFile err =`, err);
                }
            });
        }
    });
};

const ANE = APP_NODE_ENV;

// export default ANE;
module.exports = ANE;


