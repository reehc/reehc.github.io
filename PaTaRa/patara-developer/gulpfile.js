// DEFAULT GULP TASK

var // VARS FOR DEFAULT TASK
    gulp        = require('gulp'),
    gutil       = require('gulp-util'), // display any error logs via terminal window
    concat      = require('gulp-concat'), //concatenate files
    sass        = require('gulp-sass'), // sass to css preprocessing via gulp-sass
    notify      = require("gulp-notify"),
    browserSync = require('browser-sync'), // reload browser(s) whenever gulp detects a file change
    reload      = browserSync.reload,
    // VARS FOR BUILD TASK
    usemin      = require('gulp-usemin'), // replaces links to non-minified js or css in html file
    uglify      = require('gulp-uglify'), // minifies js
    minifyHtml  = require('gulp-minify-html'),
    minifyCss   = require('gulp-minify-css'),
    imagemin    = require('gulp-imagemin');
    



// control the order that js files get concatenated in by their order in the array below.
var jsSources   = [   'src/js/ios-orientationchange-fix.js',
                      'src/js/jquery-2.1.4.min.js',
                      'src/js/jquery.swipebox.js',
                      'src/js/jquery.expand-search.js',
                      'src/js/readmore.js',
                      'src/js/video.js',
                      'src/js/main.js' ];


var paths = { // create a paths object so that you can use 'paths.src.html' rather than 'src/**/*.html'
  src: {
    base: 'src',
    img:  'src/img',
    sass: 'src/sass/**/*.scss',
    js:   'src/js/**/*.js',
    html: 'src/**/*.html'
  },
  dev: {
    base: 'builds/dev',
    img:  'builds/dev/img',
    css:  'builds/dev/css',
    js:   'builds/dev/js',
    html: 'builds/dev'
  },
  dist: {
    base: 'builds/dist',
    img:  'builds/dist/img',
    css:  'builds/dist/css',
    js:   'builds/dist/js',
    html: 'builds/dist/'
  }

}

gulp.task('copy-dev', function() {
  gulp.src(paths.src.img + '**/*.*') // grab everything in the img folder and pipe it to dev
    .pipe(gulp.dest(paths.dev.base));
});

gulp.task('copy-dist', function() {
  gulp.src(paths.dev.img + '**/*.*') // grab everything in the img folder and pipe it to dist
    .pipe(gulp.dest(paths.dist.base));
});

gulp.task('copy-root', function() {
  gulp.src(paths.dev.img + '**/*.*') // grab everything in the img folder and pipe it to dist
    .pipe(gulp.dest('./'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: [paths.dev.base, paths.src.base, "./"] // look in dev, then src, then root for things
    }
  });
});

gulp.task('html', function() {
  gulp.src(paths.src.html) // get any html files from the src dir
    .pipe(gulp.dest(paths.dev.html)) // copy html files to dev folder
    .pipe(reload({stream:true})) // reload page via browserSync
});

gulp.task('js', function() {
  gulp.src(jsSources) //grab all the js files listed in the jsSources var
    .pipe(concat('scripts.js')) // pipe each file through the concat plugin and combine into a single "scripts.js" file
    .pipe(gulp.dest(paths.dev.js)) // copy the scripts.js file to the js folder in dev
    .pipe(reload({stream:true})) // reload page via browserSync
});

gulp.task('sass', function() {
  gulp.src(paths.src.sass)
    .pipe(sass())
    //.on('error', gutil.log) // enable for more verbose terminal error messages
    .pipe(gulp.dest(paths.dev.css))
    .pipe(reload({stream:true})) // reload page via browserSync
});

gulp.task('watch', function() {
  gulp.watch(paths.src.js, ['js']);
  gulp.watch(paths.src.sass, ['sass']);
  gulp.watch(paths.src.html, ['html'], reload); // watch for any changes to .html files in root or subdirectories and call the reload task
});

gulp.task('default', ['copy-dev', 'browser-sync', 'html', 'js', 'sass', 'watch']); // default task to run when typing "gulp" in terminal window


// tasks
gulp.task('minify', function() {

    // { concat, minify & jshint }
    var scriptFiles = 'builds/dev/js/*.js';
    var scriptDist = 'builds/dist/js';

    gulp.src(scriptFiles)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(scriptDist))
        .pipe(notify({
            "title": "Javascript Build",
            "message": "Build with success! file <%= file.relative %>",
        }));

    // { css minify }
    var cssFiles = 'builds/dev/css/*.css';
    var cssDist = 'builds/dist/css';

    gulp.src(cssFiles)
        .pipe(minifyCss())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest(cssDist))
        .pipe(notify({
            "title": "Css Minify Build",
            "message": "Build with success! file <%= file.relative %>",
        }));  

    // { image optimizer }
    var imageFiles = 'src/img/**/*';
    var imageDist = 'builds/dev/img';

    gulp.src(imageFiles)
        .pipe(imagemin())
        .pipe(gulp.dest(imageDist));

    // { html }
    var htmlFiles = 'builds/dev/**/*.html';
    var htmlDist = 'builds/dist/';
    
    gulp.src(htmlFiles)
        .pipe(minifyHtml())
        .pipe(gulp.dest(htmlDist))
        .pipe(notify({
            "title": "HTML Minify Build",
            "message": "Build with success! file <%= file.relative %>",
        })); 

});


