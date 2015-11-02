const assert = require('assert');
const isCoolNumber = require(process.argv[2]);
assert.strictEqual(isCoolNumber(42), true);
