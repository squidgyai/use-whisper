import type { Options } from 'tsup'

const env = process.env.NODE_ENV

export const tsup: Options = {
  splitting: true,
  sourcemap: env === 'production', // source map is only available in production
  clean: true, // rimraf dist
  dts: true, // generate dts file for main module
  format: ['cjs', 'esm'], // generate cjs and esm files
  minify: env === 'production',
  bundle: env === 'production',
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: env === 'development',
  target: 'es2020',
  outDir: 'dist',
  entry: ['src/**/*.ts'],
  treeshake: true,
  esbuildOptions: (options) => {
    options.drop = env === 'production' ? ['debugger'] : undefined
  },
}
