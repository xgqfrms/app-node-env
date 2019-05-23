# app-node-env

> APP_ENV & one cli tools for customize env of APP's NODE_ENV

https://app-node-env.xgqfrms.xyz

https://www.npmjs.com/package/app-node-env


```sh

$ npm i -g app-node-env
# OR
$ yarn global add app-node-env

```

```sh

$ npm i -D app-node-env
# OR
$ yarn add -D app-node-env

```


## npm adduser

https://docs.npmjs.com/cli/adduser

```sh

# npm adduser [--registry=url] [--scope=@orgname] [--always-auth] [--auth-type=legacy]
# aliases: login, add-user

$ npm adduser

$ npm login

```

> demos

```sh

# Username: xgqfrms
# Password:
# Email: (this IS public) xgqfrms@xgqfrms.xyz

```


![](https://img2018.cnblogs.com/blog/740516/201905/740516-20190523003213470-66050157.png)

https://www.cnblogs.com/xgqfrms/p/10648848.html



## npm publish

https://docs.npmjs.com/cli/publish

```sh
# npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--otp otpcode] [--dry-run]

# Publishes '.' if no argument supplied
# Sets tag 'latest' if no --tag specified

$ npm publish

```



```sh

"bin": {
    "app": "app",
    "pre": "pre",
    "dev": "dev"
},

```


## demo

```sh
# node
$ node src/env-generator env=dev
# OR
$ node index env=dev
# only will create env.js in root folder!


$ npm info app-node-env version
# 1.1.5

$ npm whoami
# xgqfrms

```
## module.exports

```js

// export default APP_NODE_ENV;

module.exports = APP_NODE_ENV;
// ES6
module.exports.default = APP_NODE_ENV;

```

```js
// ANE
import ANE from "./src/env-generator";
export default ANE;

```


## name conflict

https://stackoverflow.com/a/46766267/5934465

https://github.com/npm/npm/issues/8561

https://www.npmjs.com/package/app-env

https://github.com/chipto/app-env

https://www.npmjs.com/package/node-env
https://github.com/Raynos/node-env


> OK

https://www.npmjs.com/package/app-node-env


## npm publish tips


1. cli tools no need `module.exports`

2. only js modules need `module.exports`

## demos

```sh
# node
$ ane env=dev
# OR
$ node ane env=dev


$ npm info ane version
# 1.1.12

$ npm whoami
# xgqfrms

```




