
// import("./ane-cjs.cjs").then();
// import("./ane-esm.mjs").then();


// const packageInfo = require("./package.json");

import * as pkg from "./package.json" assert { type: "json" };

/*

(node:33503) ExperimentalWarning: Importing JSON modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

*/

// import * as pkg from "./package.json";

/*

TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]: Module "file:///Users/xgqfrms-mm/Documents/github/app-node-env/package.json" needs an import assertion of type "json"

*/

console.log(`pkg `, pkg);

// console.log(`process `, process);

// process.env
// console.log(`process.env`, process.env);

// args
console.log(`process.argv`, process.argv);

let key = `APP_ENV`;
let value = `dev`;

const args = process.argv.slice(2);
console.log(`args =`, args);

if (args[0]) {
  if(args[0].split(`=`)[0]) {
    key = args[0].split(`=`)[0];
  }
  if(args[0].split(`=`)[1]) {
    value = args[0].split(`=`)[1];
  }
}

console.log(`key =`, key);
console.log(`value =`, value);
