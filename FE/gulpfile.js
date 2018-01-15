const gulp = require('gulp')
const connect = require('gulp-connect')
const browserSync = require('browser-sync')


// gulp.task('webserver', function( ) {
//     connect.server({
//         liverload: true,
//         port: 8080
//     })
//     browserSync.init({
//         server: {
//             baseDir: './'
//         },
//         port: 8080
//     })
//     gulp.watch('*.html', ['html'])
// })

// gulp.task('default', ['webserver'])

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         files: ['**'],
//         proxy: 'localhost',
//         port: 8080
//     })
// })

// 开代理的问题是编辑器本地环境不能访问，需要另外搭建服务器。

// gulp.task('default', ['browser-sync'])



//


gulp.task('default', ['browser-sync'])