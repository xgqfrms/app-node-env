// default
// const env = process.env.PORT_ENV || 8080;
// module.exports = env;


// single env ✅
// module.exports = process.env.PORT_ENV || 8080;

// multi envs ✅
// module.exports = {
//   PORT_ENV: process.env.PORT_ENV || 8080,
//   PROXY_ENV: process.env.PROXY_ENV || 'dev',
// };



// all envs ✅
module.exports = {
  ...process.env,
};
// module.exports = process.env;

// module.exports = {
//   env: process.env,
// };

// module.exports.env = process.env;


/*

$ PORT_ENV=777 PROXY_ENV=pre node ./env-test.js

ENV = { PORT_ENV: '777', PROXY_ENV: 'pre' }
process.env.PORT_ENV = 777
process.env.PROXY_ENV = pre

*/




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

