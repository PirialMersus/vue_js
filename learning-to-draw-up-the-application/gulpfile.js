var gulp        = require('gulp');
var less        = require('gulp-less');
var browserSync = require('browser-sync');
var browserify  = require('browserify');
var vueify      = require('vueify');
var source      = require('vinyl-source-stream');

gulp.task('server', function(){
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('html', function (){
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('css', function (){
    gulp.src('./src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function (){
    browserify('./src/js/index.js')
        .transform(vueify)
        .bundle()
        .pipe(source('scripts.all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function (){
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/less/**/*.less', ['css']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/vue/**/*.vue', ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'watch', 'server']);