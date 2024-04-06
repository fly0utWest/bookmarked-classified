import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import postCSS from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import browserSyncPackage from 'browser-sync';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import webp from 'gulp-webp';
import { exec } from 'child_process';

const sassCompiler = gulpSass(sass);
const browserSync = browserSyncPackage.create();

function serve(done) {
  browserSync.init({
    server: './src',
    notify: false,
  });
  done();
}

async function npmStart(done) {
  exec('npm start', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    done(err);
  });
}

function watchFiles() {
  gulp.watch('./src/**/*.scss', compileSass);
  gulp.watch('./src').on('change', browserSync.reload);
}

async function clean() {
  const { default: del } = await import('del');
  return del(['build']);
}

function compileSass() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sassCompiler({ outputStyle: 'compressed' }).on(
        'error',
        sassCompiler.logError,
      ),
    )
    .pipe(postCSS([autoprefixer]))
    .pipe(gulp.dest('./src/css'))
    .pipe(cleanCSS({ level: { 1: { specialComments: 0 } } }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
}

function imgToWebp() {
  return gulp
    .src([
      './public/**/*.{jpg,png,jpeg}',
      './src/**/*.{jpg,png,jpeg}',
    ])
    .pipe(webp())
    .pipe(gulp.dest((file) => file.base));
}

const watch = gulp.parallel(watchFiles, serve);
const watchReact = gulp.parallel(npmStart, watchFiles);

gulp.task('clean', clean);
gulp.task('scss', compileSass);
gulp.task('watch', gulp.parallel(watchFiles, serve));
gulp.task('webp', imgToWebp);
gulp.task('default', watchReact);
