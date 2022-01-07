const minimist = require('minimist')(process.argv.slice(2));

console.log(`Player: ${minimist.name}; Credits: ${minimist.c}`);
