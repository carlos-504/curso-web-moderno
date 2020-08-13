const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformarcaoTS() {
    return tsProject.src()
        // responsável pelo processo de compilação TS -> JS
        .pipe(tsProject())
        // definindo o destino
        .pipe(gulp.dest('build'))
}

exports.default = series(transformarcaoTS)