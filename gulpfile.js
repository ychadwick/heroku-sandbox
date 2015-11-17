var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    copy = require('gulp-copy'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-minify-css'),
    debug = require('gulp-debug');

gulp.task('less', function () {
    gulp.src([
            'web/bundles/sonataadmin/css/vendor/select2/select2.css',
            'web/bundles/sonataadmin/css/vendor/jqueryui/themes/base/jquery-ui.css',
            'web/bundles/mopaboostrap/components/smalot-bootstrap-datetimepicker/build/build_standalone.less',
            'vendor/networking/init-cms-bundle/resources/public/less/initcms_bootstrap.less',
            'web/bundles/networkinginitcms/css/bootstrap-editable.css'
        ])
        .pipe(concat('networking_initcms.css'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/css/'));

});

gulp.task('less_frontend', function () {
    gulp.src([
            'src/Application/Networking/InitCmsBundle/Resources/public/less/styles.less',
            'src/Application/Networking/InitCmsBundle/Resources/public/css/prettyPhoto.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/css/'));

});

gulp.task('fonts', function () {
    gulp.src(
        ['web/bundles/mopabootstrap/fonts/bootstrap/*',
            'web/bundles/mopabootstrap/fonts/fa/*',
            'web/bundles/mopabootstrap/fonts/fa4/*'
        ])
        .pipe(copy('web/fonts/', {prefix: 4}));
});

gulp.task('img', function () {
    gulp.src([
            'web/bundles/networkinginitcms/img/icons/*',
            'web/bundles/networkinginitcms/img/*'
        ])
        .pipe(copy('web/img/', {prefix: 4}));
});

gulp.task('jquery', function () {
    gulp.src([
            'web/bundles/sonataadmin/vendor/jquery/dist/jquery.min.js',
            'web/bundles/sonataadmin/vendor/jqueryui/ui/minified/jquery-ui.min.js',
            'web/bundles/sonataadmin/vendor/jqueryui/ui/minified/i18n/jquery-ui-i18n.min.js',
            'web/bundles/networkinginitcms/js/jquery.ui.touch-punch.min.js'
        ])
        .pipe(concat('jquery.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/js/'));
});

gulp.task('bootstrapjs', function () {
    gulp.src([
            'web/bundles/mopabootstrap/bootstrap/js/tooltip.js',
            'web/bundles/mopabootstrap/bootstrap/js/affix.js',
            'web/bundles/mopabootstrap/bootstrap/js/alert.js',
            'web/bundles/mopabootstrap/bootstrap/js/button.js',
            'web/bundles/mopabootstrap/bootstrap/js/carousel.js',
            'web/bundles/mopabootstrap/bootstrap/js/collapse.js',
            'web/bundles/mopabootstrap/bootstrap/js/dropdown.js',
            'web/bundles/mopabootstrap/bootstrap/js/modal.js',
            'web/bundles/mopabootstrap/bootstrap/js/popover.js',
            'web/bundles/mopabootstrap/bootstrap/js/scrollspy.js',
            'web/bundles/mopabootstrap/bootstrap/js/tab.js',
            'web/bundles/mopabootstrap/bootstrap/js/transition.js',
            'web/bundles/networkinginitcms/js/bootstrap-editable.min.js'
        ])
        .pipe(concat('bootstrap.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/js/'));
});

gulp.task('networking_initcms', function () {
    gulp.src([
            'web/bundles/networkinginitcms/js/mopabootstrap-collection.js',
            'web/bundles/mopabootstrap/components/smalot-bootstrap-datetimepicker/js/bootstrap-datetimepicker.js',
            'web/bundles/sonataadmin/vendor/select2/select2.min.js',
            'web/bundles/sonataadmin/jquery/jquery.form.js',
            'web/bundles/networkinginitcms/js/bootstrap-contextmenu.js',
            'web/bundles/networkinginitcms/js/featherlight.js'
        ])
        .pipe(concat('networking_initcms.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/js/'));
});

gulp.task('sandbox_js', function () {
    gulp.src([
            'web/bundles/mopabootstrap/bootstrap/js/tooltip.js',
            'web/bundles/mopabootstrap/bootstrap/js/affix.js',
            'web/bundles/mopabootstrap/bootstrap/js/alert.js',
            'web/bundles/mopabootstrap/bootstrap/js/button.js',
            'web/bundles/mopabootstrap/bootstrap/js/carousel.js',
            'web/bundles/mopabootstrap/bootstrap/js/collapse.js',
            'web/bundles/mopabootstrap/bootstrap/js/dropdown.js',
            'web/bundles/mopabootstrap/bootstrap/js/modal.js',
            'web/bundles/mopabootstrap/bootstrap/js/popover.js',
            'web/bundles/mopabootstrap/bootstrap/js/scrollspy.js',
            'web/bundles/mopabootstrap/bootstrap/js/tab.js',
            'web/bundles/mopabootstrap/bootstrap/js/transition.js',
            'web/bundles/mopabootstrap/js/mopabootstrap-subnav.js',
            'web/bundles/mopabootstrap/js/mopabootstrap-collection.js',
            'web/bundles/applicationnetworkinginitcms/js/jquery.prettyPhoto.js'
        ])
        .pipe(concat('sandbox.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/js/'));
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['less', 'less_frontend', 'fonts', 'img', 'jquery', 'bootstrapjs', 'networking_initcms', 'sandbox_js']);