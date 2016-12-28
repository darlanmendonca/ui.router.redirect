import gulp from 'gulp'
import {scripts} from './config.js'

gulp.task('watch', watchTask)

function watchTask() {
  gulp.watch(scripts.src, [
    'lint',
    'scripts',
  ])
}
