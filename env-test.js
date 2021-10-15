// webpack.config.js
const PORT_ENV = require('./env.js');
// Error: Cannot find module './env.js'

console.log('PORT_ENV =', PORT_ENV);
console.log('process.env.PORT_ENV =', process.env.PORT_ENV);

// 临时 current child process env
// PORT_ENV=666 node ./env-test.js

// 临时 current parent process env
// export PORT_ENV=666
// node ./env-test.js
