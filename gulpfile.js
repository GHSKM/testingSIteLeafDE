var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var jade        = require('gulp-jade');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
   var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
   // return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
   return cp.spawn("jekyll.bat", ['build'], {stdio: 'inherit'}).on('close', done);// to update the site folder with the latest index file
   //return cp.exec('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
        //.on('close', done)
       // .on('error',function(err){ throw "somethin"});
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('assets/less/variables.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

/**
 * Trying to use jade in my jekyll site using gulp!
 */

 /*gulp.task('jade', function()
 {
     return gulp.src('_jadeFiles/*.jade')//tell gulp to go and get some jade files
     .pipe(jade({
         pretty: true
     }))//the variable declared above tht links to the gulp-jade
     .pipe(gulp.dest('_includes')).pipe(browserSync.reload({stream:true}));    
 });*/




/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['assets/css/variables.scss'], ['sass']);
    //gulp.watch(['_jadeFiles/*.jade'],['jade']);
    gulp.watch(['index.html','*.md', '_layouts/*.html','_includes/*.html','_posts/*','assets/css/custom.css'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
