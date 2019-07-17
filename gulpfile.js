const gulp = require('gulp');

const webserver = require('gulp-webserver');

const plumber = require('gulp-plumber');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');


gulp.task('default', ['webserver', 'sass:watch']);

gulp.task('webserver', function () {
    gulp.src(['./', '!./sass/**/*.scss'])
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(plumber())
        // .pipe(postcss([
        //     autoprefixer
        // ]))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', ['sass'], function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});