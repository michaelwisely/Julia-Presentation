'use strict';

var
path = require('path'),

// Gulp plugins
gulp = require('gulp'),
spawn = require('gulp-spawn-shim'),
pandoc = require('gulp-pandoc');

gulp.task('build', function () {
    gulp.src('src/*.md')
        .pipe(pandoc({
            from: 'markdown+yaml_metadata_block+inline_code_attributes',
            to: 'revealjs',
            ext: '.html',
            args: ['--standalone',
                   '--mathjax=https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML',
                   '--highlight-style=kate',
                   '--template=' + path.join(__dirname, './lib/default.revealjs'),
                   '--slide-level=2']
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/*.md', ['build']);
});

gulp.task('default', ['watch']);
