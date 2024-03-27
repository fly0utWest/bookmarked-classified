import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import postCSS from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'imagemin';
import browserSyncPackage from 'browser-sync';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import cache from 'gulp-cache';
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
  const {default: del} = await import('del');
  return del(['dist']);
}

function optimizeImages() {
  return gulp
    .src([
      './public/**/*.{jpg,png,svg,gif,jpeg}',
      './src/components/**/*.{jpg,png,svg,gif,jpeg}',
    ])
    .pipe(
      cache(
        imagemin([
          imagemin.mozjpeg({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
        ]),
      ),
    )
    .pipe(gulp.dest((file) => file.base));
}

function compileSass() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sassCompiler({ outputStyle: 'expanded' }).on(
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

const build = gulp.series(clean, gulp.parallel(optimizeImages, compileSass));
const watch = gulp.parallel(watchFiles, serve);
const watchReact = gulp.parallel(npmStart, watchFiles);

gulp.task('clean', clean);
gulp.task('images', optimizeImages);
gulp.task('scss', compileSass);
gulp.task(
  'build',
  gulp.series(clean, gulp.parallel(optimizeImages, compileSass)),
);
gulp.task('watch', gulp.parallel(watchFiles, serve));
gulp.task('default', watchReact);
