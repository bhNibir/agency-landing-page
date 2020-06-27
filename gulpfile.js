
// 'use strict';
 
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
 
// sass.compiler = require('node-sass');
 
// gulp.task('sass', function () {
//   return gulp.src('./src/scss/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./src/css'));
// });
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./src/scss/*.scss', ['sass']);
// });

// // Static Server + watching scss/html files
// gulp.task('serve', function() {

//     browserSync.init({
//         server: "./src"
//     });

//     gulp.watch("src/scss/*.scss", ['sass']);
//     gulp.watch("src/*.html").on('change', browserSync.reload);
//     gulp.series('sass');
// });

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
//compile scss into css
function style() {
    return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html"
        }
    });
    gulp.watch('src/scss/*.scss', style)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;