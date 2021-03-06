const fs = require('fs');

describe('bundling', () => {
  it('should work', () => {
    // TODO(#32) Can shorten the path if
    // https://github.com/bazelbuild/rules_nodejs/issues/32 is resolved
    const bundle = 'build_bazel_rules_nodejs/examples/rollup/bundle.js';
    const actual = fs.readFileSync(require.resolve(bundle), {encoding: 'utf-8'});
    const expected =
        '/*Generated by Bazel*/\n\nconst name = \'Alice\';\n\nconsole.log(`Hello, ${name}`);\n';
    expect(actual).toEqual(expected);
  });
});
