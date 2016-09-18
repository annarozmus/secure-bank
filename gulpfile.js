var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    sass = require("gulp-sass"),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync").create(),
    autoprefixer = require('gulp-autoprefixer');

gulp.task("libs:js", function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/tether/dist/js/tether.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
        .pipe(gulp.dest('./libs/js'));
});

gulp.task("libs:css", function () {
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/skeleton-css/css/normalize.css',
        './node_modules/skeleton-css/css/skeleton.css'

    ])
        .pipe(gulp.dest('./libs/css'));
});

gulp.task("jshint", function () {
    return gulp.src("main.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(browserSync.stream())
});

gulp.task("sass", function () {
    return gulp.src("style.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream())

});

gulp.task('watch', function () {
    browserSync.init({
        browser: "firefox",
        server: {
            baseDir: "."
        }
    });

     gulp.watch('index.html', browserSync.reload);
     gulp.watch('main.js', ["jshint"]);
     gulp.watch('style.scss', ["sass"]);
});


gulp.task("default", ["libs:js", "libs:css", "watch"]);



