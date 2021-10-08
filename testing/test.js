#!/usr/bin/env node

const {
  version,
  versions,
  arch,
  platform,
  argv,
  env,
} = process;

// v12.18.0
console.log('\nnode.js version =',  version.substr(1).split('.')[0]);
console.log('\nnode.js process.version =', version);
console.log('\nnode.js process.versions =', versions);

console.log('\nnode.js process.arch =', arch);
console.log('\nnode.js process.platform =', platform);
console.log('\nnode.js process.argv =', argv);
// console.log('\nnode.js process.env =', env);

// console.log('\nnode.js process =\n', process);

