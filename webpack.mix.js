let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    // .js('resources/assets/js/app.js', 'public/js')
    .sass('scss/style.scss', 'css')
    .scripts([
        'js/vendor/modernizr-3.5.0.min.js',
        'js/vendor/jquery-1.12.4.min.js',
        'js/popper.min.js',
        'js/bootstrap.min.js',
        'js/owl.carousel.min.js',
        'js/isotope.pkgd.min.js',
        'js/ajax-form.js',
        'js/waypoints.min.js',
        'js/jquery.counterup.min.js',
        'js/imagesloaded.pkgd.min.js',
        'js/scrollIt.js',
        'js/jquery.scrollUp.min.js',
        'js/wow.min.js',
        'js/nice-select.min.js',
        'js/jquery.slicknav.min.js',
        'js/jquery.magnific-popup.min.js',
        'js/plugins.js',
        'js/gijgo.min.js',
        'js/contact.js',
        'js/jquery.ajaxchimp.min.js',
        'js/jquery.form.js',
        'js/jquery.validate.min.js',
        'js/mail-script.js',
        'js/main.js'
    ], 'js/app.js')
    .browserSync({
        proxy: 'localhost:8000',
        open: false,
        files: ['css/**/*.css', '*.html'],
    })
    .options({
        processCssUrls: false,
    })
    .styles([
        'resources/assets/vendor/bootstrap/css/bootstrap.min.css',
        'resources/assets/vendor/font-awesome/css/font-awesome.min.css',
        'resources/assets/vendor/magnific-popup/magnific-popup.css',
    ], 'public/css/vendor.css')
    .minify('js/app.js')
