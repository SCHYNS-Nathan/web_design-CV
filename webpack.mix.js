const mix = require('laravel-mix');

mix.ts("./src/js/main.ts","js/").sourceMaps()
    .setPublicPath("dist")
    .browserSync({
        server: {
            baseDir: './'
        },
    open: true
});