const path = require('path');

const gulp = require('gulp');

let ROOT = '../'

let dest = path.resolve(__dirname, ROOT, 'public/js');
let entry = path.resolve(__dirname, ROOT, 'public/js/materialize.min.js');

gulp.task('copy:js', function () {
  gulp.src([entry])
    .pipe(gulp.dest(dest));
});
