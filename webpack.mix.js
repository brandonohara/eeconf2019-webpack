const mix = require('laravel-mix');

mix.js('src/index.js', 'dist/bundle.js')
   .sass('src/styles/main.scss', 'dist/app.css');
