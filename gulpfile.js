const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const jade        = require('gulp-jade');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css/"))
        .pipe(browserSync.stream());
});

gulp.task('jade', function() {
    return gulp.src(["jade/*.jade"])
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(""))
})


// Watch Sass & Serve
gulp.task('serve', ['sass', 'jade'], function() {
    browserSync.init({
        server: "."
    });

    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch(['jade/*.jade'], ['jade']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
