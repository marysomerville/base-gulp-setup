//gulpfile.js
var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var concat 		= require('gulp-concat');
var rename 		= require('gulp-rename');
var cleanCSS 	= require('gulp-clean-css');
var jshint 		= require('gulp-jshint');
var uglify 		= require('gulp-uglify');
var imagemin 	= require('gulp-imagemin');
var cache 		= require('gulp-cache');
var sourcemaps 	= require('gulp-sourcemaps');
var plumber 	= require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

//style paths
var sassFiles = 'assets/css/**/*.scss',  
    cssDest = 'assets/css/';

gulp.task('styles', function(){  
    return gulp.src(sassFiles)
    	.pipe(plumber())
    	.pipe(sourcemaps.init())
        	.pipe(sass().on('error', sass.logError))
        	.pipe(autoprefixer())
        	.pipe(gulp.dest(cssDest))
        	.pipe(rename({ suffix: ".min" }))
    		.pipe(cleanCSS())
        	.pipe(sourcemaps.write())
        .pipe(gulp.dest(cssDest));
});

//script paths
var jsFiles = 'assets/js/src/*.js',  
    jsDest = 'assets/js';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
    	.pipe(plumber())
    	.pipe(sourcemaps.init())
        	.pipe(concat('scripts.js'))
        	.pipe(gulp.dest(jsDest))
        	.pipe(rename({suffix: '.min'}))
        	.pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsDest));
});

var jsPluginFiles = 'assets/js/plugins/*.js',  
    jsPluginDest = 'assets/js';

gulp.task('plugin-scripts', function(){
    return gulp.src([jsPluginFiles])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest(jsPluginDest))
        .pipe(rename('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsPluginDest));
});

//JavaScript hints
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Image optimisation
var imageFiles = 'assets/images/site/**/*.+(png|jpg|gif|svg)',  
    imageDest = 'assets/images/dist';

gulp.task('images', function(){
	return gulp.src(imageFiles)
	.pipe(cache(imagemin()))
	.pipe(gulp.dest(imageDest))
});

//Watch tasks
gulp.task('watch',function() {  
    gulp.watch(sassFiles,['styles']);
    gulp.watch(jsFiles,['jshint', 'scripts']);
    gulp.watch(jsPluginFiles,['plugin-scripts']);
    gulp.watch(imageFiles,['images']);
});

// Default task: runs tasks immediately and continues watching for changes
gulp.task('default', ['jshint', 'scripts', 'plugin-scripts', 'styles', 'images', 'watch']);
