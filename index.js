"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms 2019.05.12
 *
 * @description APP_NODE_ENV
 * @augments
 * @example node env-generator.js env=dev
 *
 */

// import ANE from "./src/env-generator";
// export default ANE;

const fs = require("fs");

const env = process.argv.slice(2)[0].substr(4);
const filename = "./env.js";

const APP_NODE_ENV = () => {
    fs.open(filename, "r", (err, fd) => {
        console.log("APP_ENV =", env);
        if (err) {
            fs.writeFile(filename, `const APP_ENV = "${env}";\nexport default APP_ENV;`, (err, fd) => {
                if(err) {
                    console.log(`writeFile err =`, err);
                }
            });
        } else {
            fs.writeFile(filename, `const APP_ENV = "${env}";\nexport default APP_ENV;`, (err, fd) => {
                if(err) {
                    console.log(`writeFile err =`, err);
                }
            });
        }
    });
};

export default APP_NODE_ENV;

