const { series } = require('gulp') // executa asn tarefas(funções)
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify') // minifica o código para uma linha
const babel = require('gulp-babel') // adapta o código para uma maneira mais fácil para o browser

function transformacaoJS(cb) {
    // Pegando todos os arquivos js
    gulp.src('src/**/*.js')
        // fazendo o primeiro tratamento(pipe) com babel de parâmetro
        .pipe(babel({
            // comments faz com que o cometários não esteja no arquivo final
            comments: false,
            // pega o js mais novo possível "env" = mais novo
            presets: ["env"]
        }))
        // segundo tratamento, minificando o arquivo, não é necessário parâmetro
        .pipe(uglify())
        // concatenando todos os códigos selecionados no .src
        .pipe(concat('codigo.min.js'))
        // criando o destino do arquivo
        .pipe(gulp.dest('build'))

        return cb()
}

const fim = cb => {
    console.log('Fim!!!')
    
    return cb()
}

module.exports.default = series(transformacaoJS, fim)