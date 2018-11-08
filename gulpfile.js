"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();


gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('css'));
});


gulp.task("style", function() {
  gulp.src('sass/*.sass')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer({browsers: [
      "last 5 versions"
      ]})
    ]))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("css"))
  .pipe(server.stream());
});



gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
});




gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.watch("sass/**/*.sass", ["style"]);
gulp.watch("*.html").on("change", server.reload);