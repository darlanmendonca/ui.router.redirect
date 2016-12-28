module.exports = {
  scripts: {
    src: [
      './sources/**/*.js',
      '!./sources/**/*.spec.js',
    ],
    dest: './dist/',
    output: 'ui.router.redirect.js',
  },
  lintScripts: [
    './gulpfile.babel.js',
    './tasks/**/*.js',
    './sources/**/*.js',
  ],
}
