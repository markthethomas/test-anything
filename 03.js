const test = require('tape');
const fancify = require(process.argv[2]);

test('should return a wrapped string', (t) => {
  t.equal(fancify('Hello'), '~*~Hello~*~', 'wraps a string');
  t.equal(fancify('Hello', true), '~*~HELLO~*~', 'returns an upcased, wrapped string');
  t.equal(fancify('Hello', false, '!'), '~!~HELLO~!~', 'lets you choose the middle string');
  t.end();
});
