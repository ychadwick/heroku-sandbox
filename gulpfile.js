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
            'vendor/networking/init-cms-bundle/resources/public/less/initcms_bootstrap.less'
        ])
        .pipe(concat('networking_initcms_bootstrap.css'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/css/'));
    gulp.src([
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/components/smalot-bootstrap-datetimepicker/build/build_standalone.less',
            'vendor/sonata-project/admin-bundle/Resources/public/css/vendor/select2/select2.css',
            'vendor/sonata-project/admin-bundle/Resources/public/css/vendor/jqueryui/themes/base/jquery-ui.css',
            'vendor/networking/init-cms-bundle/resources/public/css/bootstrap-editable.css'
        ])
        .pipe(concat('bootstrap.css'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/css/'));

    gulp.src([
            'web/css/networking_initcms_bootstrap',
            'web/css/bootstrap.css'
        ])
        .pipe(concat('networking_initcms.css'))
        .pipe(sourcemaps.init())
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
        [
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/fonts/bootstrap/*',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/fonts/fa/*',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/fonts/fa4/*'
        ])
        .pipe(copy('web/fonts/', {prefix: 4}));
});

gulp.task('img', function () {
    gulp.src([
            'vendor/networking/init-cms-bundle/resources/public/img/icons/*',
            'vendor/networking/init-cms-bundle/resources/public/img/*'
        ])
        .pipe(copy('web/img/', {prefix: 4}));
});

gulp.task('jquery', function () {
    gulp.src([
            'vendor/sonata-project/admin-bundle/Resources/public/vendor/jquery/dist/jquery.min.js',
            'vendor/sonata-project/admin-bundle/Resources/public/vendor/jqueryui/ui/minified/jquery-ui.min.js',
            'vendor/sonata-project/admin-bundle/Resources/public/vendor/jqueryui/ui/minified/i18n/jquery-ui-i18n.min.js',
            'vendor/networking/init-cms-bundle/resources/public/js/jquery.ui.touch-punch.min.js'
        ])
        .pipe(concat('jquery.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/js/'));
});

gulp.task('bootstrapjs', function () {
    gulp.src([
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/tooltip.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/affix.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/alert.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/button.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/carousel.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/collapse.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/dropdown.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/modal.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/popover.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/scrollspy.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/tab.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/transition.js',
            'vendor/networking/init-cms-bundle/resources/public/js/bootstrap-editable.min.js'
        ])
        .pipe(concat('bootstrap.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/js/'));
});

gulp.task('networking_initcms', function () {
    gulp.src([
            'vendor/networking/init-cms-bundle/resources/public/js/mopabootstrap-collection.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/components/smalot-bootstrap-datetimepicker/js/bootstrap-datetimepicker.js',
            'vendor/sonata-project/admin-bundle/Resources/public/vendor/select2/select2.min.js',
            'vendor/sonata-project/admin-bundle/Resources/public/jquery/jquery.form.js',
            'vendor/networking/init-cms-bundle/resources/public/js/bootstrap-contextmenu.js',
            'vendor/networking/init-cms-bundle/resources/public/js/featherlight.js'
        ])
        .pipe(concat('networking_initcms.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/js/'));
});

gulp.task('sandbox_js', function () {
    gulp.src([
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/tooltip.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/affix.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/alert.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/button.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/carousel.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/collapse.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/dropdown.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/modal.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/popover.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/scrollspy.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/tab.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/bootstrap/js/transition.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/js/mopabootstrap-subnav.js',
            'vendor/mopa/bootstrap-bundle/Mopa/Bundle/BootstrapBundle/Resources/public/js/mopabootstrap-collection.js',
            'src/Application/Networking/InitCmsBundle/Resources/publicjs/jquery.prettyPhoto.js'
        ])
        .pipe(concat('sandbox.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('web/js/'));
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['less', 'less_frontend', 'fonts', 'img', 'jquery', 'bootstrapjs', 'networking_initcms', 'sandbox_js']);