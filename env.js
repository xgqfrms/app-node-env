// default
// const env = process.env.PORT_ENV || 8080;
// module.exports = env;

module.exports = process.env.PORT_ENV || 8080;

/*

// 单个 process 直接执行 ✅

$ PORT_ENV=777 node ./env-test.js
PORT_ENV = 666
process.env.PORT_ENV = 666

*/


/*

// && 多个 process ❌

$ PORT_ENV=777
$ node ./env-test.js
PORT_ENV = 8080
process.env.PORT_ENV = undefined


*/

