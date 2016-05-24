var gulp = require('gulp')  
var webserver = require('gulp-webserver')  
var stylus = require('gulp-stylus')  
var browserify = require('browserify')
var babelify = require('babelify')   
var reactify = require('reactify')
var source = require('vinyl-source-stream')  
var nib = require('nib')  
var minify = require('gulp-minify-css')

 
gulp.task('server', function() {  
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'indexMembers.html',
      livereload: true
    }))
})

gulp.task('build', function() { 

    var bundler = browserify({
        entries: ['./components/headerRoyal.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });

  return bundler
  .bundle()
  .pipe(source('headerRoyal.js'))
  .pipe(gulp.dest('./build/js'))
})


gulp.task('builEC6', function() { 
    var bundler = browserify({
        entries: ['./components/componentsE6.jsx'], // Only need initial file, browserify finds the deps
        extensions: ['.jsx'],
        //transform: [babelify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        //cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
  return bundler
  .transform(babelify)
  .bundle()
  .pipe(source('contact.js'))
  .pipe(gulp.dest('./build/js'))
})


gulp.task('build-contact', function() { 

    var bundler = browserify({
        entries: ['./components/contacts-form.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });

  return bundler
  .bundle()
  .pipe(source('contact.js'))
  .pipe(gulp.dest('./build/js'))
})



gulp.task('buildMembers', function() { 
    var bundler = browserify({
        entries: ['./components/headerMembers.jsx'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
  return bundler
  .bundle()
  .pipe(source('headerMembers.js'))
  .pipe(gulp.dest('./build/js'))
})


gulp.task('watch', function() {  

  gulp.watch('./**/*.jsx', ['build-contact'])

})

gulp.task('default', ['server', 'watch']) 