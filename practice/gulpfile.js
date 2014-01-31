// Include gulp & plugins
var gulp = require('gulp'),
	jshint = require('gulp-autoprefixer'),
	prefix = require('gulp-autoprefixer'),
	browserSync = require('browser-sync');

// autoprefix Task
gulp.task('autoprefix', function() {
    gulp.src('./css/*.css')
    .pipe(prefix())
    .pipe(gulp.dest('./css'));
});

//browser sync Task
gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css', '*.php'], {
	    proxy: {
	        host: 'localhost',
	        port: '80'
	    }
	});
});

// Default Task
gulp.task('default', function(){
    gulp.run('autoprefix');
    gulp.run('browser-sync');

    // Watch For Changes To Our CSS
    gulp.watch('./css/*.css', function(){
        gulp.run('autoprefix');
    });
});

