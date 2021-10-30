const typescript = require('@rollup/plugin-typescript');

const ts = typescript({
  target: 'es3',
  outDir: 'dist/cjs',
  tsconfig: require.resolve('./tsconfig.build.json'),
});

module.exports = {
  input: 'src/index.ts',
  output: {
    sourcemap: true,
    dir: 'dist/cjs',
    format: 'cjs',
  },
  plugins: [ts],
};
