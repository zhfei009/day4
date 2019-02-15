/*
 * @Author: zFei 
 * @Date: 2019-02-15 16:22:08 
 * @Last Modified by: zFei
 * @Last Modified time: 2019-02-15 18:36:15
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
// 建立编译sass任务
gulp.task('comSass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});