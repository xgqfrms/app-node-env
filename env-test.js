// webpack.config.js
// const PORT_ENV = require('./env.js');
// console.log('PORT_ENV =', PORT_ENV);
// console.log('process.env.PORT_ENV =', process.env.PORT_ENV);

const ENV = require('./env.js');

console.log('ENV =', ENV);
console.log('\nENV.PORT_ENV =', ENV.PORT_ENV);
console.log('ENV.PROXY_ENV =', ENV.PROXY_ENV);
console.log('\nprocess.env.PORT_ENV =', process.env.PORT_ENV);
console.log('process.env.PROXY_ENV =', process.env.PROXY_ENV);

// 临时 current child process env
// PORT_ENV=666 node ./env-test.js

// 临时 current parent process env
// export PORT_ENV=666
// node ./env-test.js
