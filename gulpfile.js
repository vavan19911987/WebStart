const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');
 
gulp.task('minify-css', () => {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('move-js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});
gulp.task('htmlmin', () => {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('dist/'));
});
gulp.task('fonts', () => {
  return gulp.src('./src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));
});

gulp.task('tinypng', function (done) {
	gulp.src('./src/img/**/*.{png,jpg,jpeg}')
		 .pipe(tinypng({
			  key: 'PrQzqCjzbzn8WWkYXpy7cxwX6C6ClY5x',
			  sigFile: 'images/.tinypng-sigs',
			  log: true
		 }))
		 .pipe(gulp.dest('dist/img'));
		 done();
});