var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  
  gulp.src('js/*.js') 
  .pipe(minify())
  .pipe(gulp.dest('build'));  

gulp.src('js/*.js', { base: 'client' })
  .pipe(minify())
  .pipe(gulp.dest('build'));
});