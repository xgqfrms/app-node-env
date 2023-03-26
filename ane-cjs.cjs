#!/usr/bin/env node

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019.05.12
 * @modified 2023-03-26
 *
 * @description APP_ENV Generator
 * @difficulty Easy
 * @time_complexity O(n)
 * @space_complexity O(n)
 * @augments
 * @example node ./env-generator.js APP_ENV=dev
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const fs = require("fs");
const packageInfo = require("./package.json");

const {
  version,
  argv,
} = process;

// v18.12.0
console.log('\n🚀 your node.js version =', version.substring(1).split('.')[0]);

const args = argv.slice(2) || [];

const isPureNumber = (str = '') => {
  const numberDict = [...''.padEnd(10, 'x')].map((_, i) => `${i}`);
  const arr = `${str}`.split('');
  return arr.every(item => numberDict.includes(item));
}

let key = "";
let env = "";

if (!args[0]) {
  args[0] = "";
  console.log(`📦 version = ${packageInfo.version}`);
  key = 'APP_ENV';
  env = 'dev';
} else {
  const tempArr = args[0].split('=');
  key = tempArr[0] || 'APP_ENV';
  env = isPureNumber(tempArr[1]) ? parseInt(tempArr[1]) : tempArr[1];
}

let defaultTemplate = ``;
let envTemplate = ``;

// ES5
if (isPureNumber(env)) {
  defaultTemplate = `// default\nconst ${key} = ${env};\nmodule.exports = ${key};\n`;
  envTemplate = `// 🎉\nconst ${key} = ${env};\nmodule.exports = ${key};\n`;
} else {
  defaultTemplate = `// default\nconst ${key} = '${env}';\nmodule.exports = ${key};\n`;
  envTemplate = `// 🎉\nconst ${key} = '${env}';\nmodule.exports = ${key};\n`;
}

console.log('\n🎮 creating...');

const filename = "./env.js";

fs.open(filename, "r", (err, fd) => {
  if (err) {
    fs.writeFile(filename, defaultTemplate, (err, fd) => {
      if (err) {
        console.log(`writeFile err =`, err);
      }
    });
  } else {
    fs.writeFile(filename, envTemplate, (err, fd) => {
      if (err) {
        console.log(`writeFile err =`, err);
      }
    });
  }
});

console.log('\n🎉 finished!');

