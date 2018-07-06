const path = require('path');

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./tools', {recurse: false});

gulp.task('default', ['build:client', 'build:server', 'copy:js', 'watch:scss']);
