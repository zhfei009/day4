/*
 * @Author: zFei 
 * @Date: 2019-02-15 16:22:08 
 * @Last Modified by: zFei
 * @Last Modified time: 2019-02-15 18:50:07
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
// 建立编译sass任务
gulp.task('comSass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(minCss()) // 压缩css
        .pipe(gulp.dest('./src/css'));
});
// 监听scss文件
gulp.task('watchSass', function() {
    return gulp.watch('./src/scss/**/*.scss', gulp.series('comSass'));
});
// 启服务
gulp.task('startServer', function() {
    return gulp.src('src')
        .pipe(server({
            host: '169.254.55.251',
            port: 9090,
            livereload: true
        }))

});
// js
gulp.task('zipJS', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});