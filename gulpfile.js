var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

gulp.task("welcome", function(){
    console.log("Hello Mike");
});

gulp.task("sass", function(){
    return gulp.src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({
        stream: true
    }))
})

gulp.task("browserSync", function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
})

// Gulp watch syntax
gulp.task("watch", ['browserSync', 'sass'], function(){
    gulp.watch("app/scss/**/*.scss", ["sass"]);
    gulp.watch("app/*.html", browserSync.reload);
    gulp.watch("app/js/**/*.js", browserSync.reload);
})

