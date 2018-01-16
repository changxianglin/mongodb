const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const proxyMiddleware = require('http-proxy-middleware')


gulp.task('first', function() {
    console.log('I just want to try use gulp')
})

gulp.task('msgPage', function() {
    gulp.src('./*.html')
        .pipe(gulp.dest('./dist'))
})

gulp.task('server', function() {
    var middleware = proxyMiddleware(['/**'], {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true
    })
    browserSync.init({
        files: ['**'],
        server: {
            baseDir: './dist',
            middleware: middleware
        },
        port: 5000
    })
})

gulp.task('default', ['first', 'server', 'msgPage'])