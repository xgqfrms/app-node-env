# app-node-env

> APP_ENV & one cli tools for customize env of APP's NODE_ENV

https://app-node-env.xgqfrms.xyz

https://www.npmjs.com/package/app-node-env

https://github.com/xgqfrms/app-node-env


```sh

$ npm i -g app-node-env
# OR
$ yarn global add app-node-env

```


## Usage

> cli

```sh
# node
$ ane env=dev
# OR
$ node ane env=dev

```

## demos

1. custom webpack devServer port

```sh
# global install
$ yarn global add app-node-env

# PORT_ENV for webpack
$ ane PORT_ENV=8090

```

```js
// webpack.config.js
const PORT_ENV = require('./env.js');

console.log('PORT_ENV =', PORT_ENV);

// const ip = require('ip');
// const hostIp = ip.address();
const config = {
  // ...
  devServer: {
    // ...
    // host: hostIp,
    port: PORT_ENV || 8080,
    proxy: [
      {
        context: ['/web/api/'],
        // dev
        target: 'https://web-dev.xgqfrms.xyz',
        // prod
        // target: 'https://web-prod.xgqfrms.xyz',
      },
    ],
  },
};

module.exports = config;

```

2. control env

```sh
# global install
$ yarn global add app-node-env

# APP_ENV for webpack
$ ane APP_ENV=dev
# $ ane APP_ENV=prod

```

```js
// webpack.config.js
const APP_ENV = require('./env.js');

console.log('APP_ENV =', APP_ENV);

let target = '';
if(APP_ENV === 'dev') {
  target = 'https://web-dev.xgqfrms.xyz';
} else {
  target = 'https://web-prod.xgqfrms.xyz';
}

const config = {
  // ...
  devServer: {
    // ...
    proxy: [
      {
        context: ['/web/api/'],
        target: target,
        // dev
        // target: 'https://web-dev.xgqfrms.xyz',
        // prod
        // target: 'https://web-prod.xgqfrms.xyz',
      },
    ],
  },
};

module.exports = config;

```

## CJS

> node.js module

```js
// CJS
const ANE = require("app-node-env");

(() => {
    ANE();
})();

```

## deploy.sh

```sh
#!/bin/bash

#!/usr/bin/env bash

```

## CI

> travis-ci

https://travis-ci.org/xgqfrms/app-node-env/builds

https://docs.travis-ci.com/user/getting-started/


> `.travis.yml `


```yml
language: node_js

```

https://docs.travis-ci.com/user/tutorial/#selecting-a-different-programming-language

## Travis CI

https://travis-ci.org/github/xgqfrms/app-node-env

https://www.cnblogs.com/xgqfrms/p/12851281.html




