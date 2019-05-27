# app-node-env

> APP_ENV & one cli tools for customize env of APP's NODE_ENV

https://app-node-env.xgqfrms.xyz

https://www.npmjs.com/package/app-node-env


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

> js module

```js
const ANE = require("app-node-env");

(() => {
    ANE();
})();

```

# deploy.sh

```sh
#!/bin/bash

#!/usr/bin/env bash

```

## CI

> travis-ci

https://travis-ci.org/xgqfrms/app-node-env/builds

https://docs.travis-ci.com/user/getting-started/

> `.travis.yml `

```yaml
language: node_js

```

https://docs.travis-ci.com/user/tutorial/#selecting-a-different-programming-language




