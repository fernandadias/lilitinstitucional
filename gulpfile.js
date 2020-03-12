"use strict"

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

/*
 * Variables
 */
// Sass Files
const scssFiles = './src/scss/**/*.scss';

// Main File
const mainFile = './src/scss/app.scss';

// CSS destination
const cssDest = './css';

/*
 * Tasks
 */
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassComp', function() {
  return gulp.src(mainFile)
    .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest(cssDest));
});


// Default task - Run with command 'gulp'
gulp.task('default', ['sassComp', 'watch']);

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassComp']);
});