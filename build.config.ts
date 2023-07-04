import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      format: 'esm',
      ext: 'mjs'
    },
    {
      builder: 'mkdist',
      input: './src/',
      format: 'cjs',
      ext: 'cjs'
    }
  ],
  declaration: true,
  clean: true
})