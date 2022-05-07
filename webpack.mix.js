const mix = require('laravel-mix');

mix.ts("./src/js/Main.ts","js/").sourceMaps()
    .setPublicPath("dist")
    .browserSync({
        server: {
            baseDir: './'
        },
    open: true
});