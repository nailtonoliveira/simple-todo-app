const path = require('path')

const execRelated = (command, filenames) =>
  `${command} ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildEslintCommand = (filenames) =>
  execRelated('next lint --fix --file', filenames)

const buildVitestCommand = (filenames) =>
  execRelated('vitest related --run', filenames)

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    buildEslintCommand,
    buildVitestCommand,
  ],
}