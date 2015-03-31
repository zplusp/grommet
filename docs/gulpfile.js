var gulp = require('gulp');
var path = require('path');

var opts = {
  base: '../',
  dist: 'docs/dist/',
  copyAssets: [
    'docs/src/index.html', 
    {
      asset: 'docs/src/style_guide/img/**',
      dist: 'docs/dist/img/'
    }
  ],
  scssAssets: ['src/scss/ligo-doc/**/*.scss'],
  jsAssets: ['docs/src/**/*.js'],
  mainJs: 'docs/src/index.js',
  mainScss: 'docs/src/scss/index.scss',
  remoteDestination: '/var/www/html/doc',
  webpack: {
    resolve: {
      root: [
        path.resolve(__dirname, '../src/js/doc'),
        path.resolve(__dirname, '../src/lib'),
        path.resolve(__dirname, 'src/scss'),
        path.resolve(__dirname, '../src/scss'),
        path.resolve(__dirname, '../node_modules')
      ]
    }  
  },
  devServerPort: 8002
};

require('../_base.gulpfile.js')(gulp, opts);