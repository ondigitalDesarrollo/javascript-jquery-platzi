const gulp = require("gulp"),
	  pug  = require('gulp-pug'),
	  sass = require('gulp-sass'),
	  minify = require('gulp-csso'),
	  uglify = require('gulp-uglify'),
	  concat = require('gulp-concat'),
	  browserify = require('browserify'),
	  source = require('vinyl-source-stream'),
	  buffer = require('vinyl-buffer'),
	  browserSync = require('browser-sync').create();

/* Server */
gulp.task('default',['css', 'html', 'browserify'], function() {
	browserSync.init({
		server: './dist/'
	});

	gulp.watch('./app/styles/**/*.scss', ['css']);
  	gulp.watch('./dist/*.html').on('change', browserSync.reload);
  	gulp.watch('./app/scripts/*.js', ['js']).on("change", browserSync.reload);
});

gulp.task('css', function() {
    return gulp.src("app/styles/*.scss")
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest("dist/css/"))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
    gulp.src("./app/*.pug")
        .pipe(pug())
        .pipe(gulp.dest("./dist/"))
});

gulp.task('js', function() {
    gulp.src('app/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('browserify', function() {
    browserify('./app/scripts/main.js')
	   .bundle()
	   .pipe(source('bundle.js'))
	   .pipe(buffer())
	   .pipe(uglify())
	   .pipe(gulp.dest('dist/js/'));
});



