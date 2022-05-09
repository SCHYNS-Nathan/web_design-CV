const mix = require('laravel-mix');

mix.ts("./src/js/Main.ts","js/").sourceMaps()
.sass("./src/css/main.scss","css/").sourceMaps()
    .setPublicPath("dist")
    .options({
        processCssUrls: false
    })
    .browserSync({
        server: {
            baseDir: './'
        },
    open: true
});