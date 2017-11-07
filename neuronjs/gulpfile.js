var gulp = require('gulp');
var newer = require('gulp-newer');

var source = '/data/data/com.termux/files/home/storage/downloads/html/misc-tools/neuronjs/src';
var destination = '/data/data/com.termux/files/home/misc-tools/neuronjs/src';

gulp.task('sync', function() {
	return gulp.src(source + '/**/*')
		.pipe(newer(destination))
		.pipe(gulp.dest(destination));
});

gulp.task('watch', function() {
	gulp.watch(source + '/**/*', ['sync']);
});
