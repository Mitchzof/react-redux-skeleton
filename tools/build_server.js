const path = require('path');

const gulp = require('gulp');
const webpack = require('webpack-stream');
const config = require('./webpack/webpack.server.config.js');

let ROOT = '../';

let dest = path.resolve(__dirname, ROOT, 'dist');
let entry = path.resolve(__dirname, ROOT, 'src/server.js');

gulp.task('build:server', function () {
  return gulp.src(entry)
    .pipe(webpack(config))
    .pipe(gulp.dest(dest));
});
