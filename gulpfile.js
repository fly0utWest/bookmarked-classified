const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const { exec } = require("child_process");

function npmStart(done) {
  exec("npm start", (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    done(err);
  });
}

function compileSass() {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      rename(function (path) {
        path.dirname = "";
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./src/styles/"));
}

function watchSass() {
  gulp.watch("./src/**/*.scss", compileSass);
}

gulp.task("default", gulp.parallel(watchSass, npmStart));
