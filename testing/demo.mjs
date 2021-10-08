"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description demo
 * @augments
 * @example
 * @link
 *
 */

/*

import ENV_PORT from "./env.js";

console.log('ENV_PORT =', ENV_PORT);

// SyntaxError: Unexpected token 'export'

*/

import ENV_PORT from "./env.mjs";
console.log('ENV_PORT =', ENV_PORT);


/*

// ExperimentalWarning: The ESM module loader is experimental.
ENV_PORT = 666

*/
