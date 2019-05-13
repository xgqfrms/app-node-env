# app-env

> APP_ENV & one cli tools for customize env of APP

https://app-env.xgqfrms.xyz

## npm publish

https://docs.npmjs.com/cli/publish

```sh
# npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--otp otpcode] [--dry-run]

# Publishes '.' if no argument supplied
# Sets tag 'latest' if no --tag specified

$ npm publish

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

https://www.cnblogs.com/xgqfrms/p/10648848.html



```sh
# node
$ node src/env-generator env=dev
# OR
$ node index env=dev
# only will create env.js in root folder!

```
