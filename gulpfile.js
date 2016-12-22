var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    scss = require('gulp-sass'),
    useref = require('gulp-useref');
   

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('useref', function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulp.dest('app'));
});

gulp.task('js', function() {
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scss', function() {
    return gulp.src('src/styles/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('src/styles/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: { 
            baseDir: 'src'
        },
        notify: false,
        tunnel: true
    });
});

gulp.task('watch', ['browser-sync', 'scss'], function() {
    gulp.watch('src/styles/*.scss', ['scss']);
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
});

