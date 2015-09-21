/*
* Dependencias
*/
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'amma'
*/
gulp.task('amma', function () {
    gulp.src('js/source/*.js')
    .pipe(concat('amma.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/build/'))
});