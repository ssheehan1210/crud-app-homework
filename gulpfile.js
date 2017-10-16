const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less-css', () => {
	gulp.src('./public/styles/style.less')
	.pipe(less())
	.pipe(gulp.dest('./public/styles'))
})

gulp.task('default', ['less-css']);
