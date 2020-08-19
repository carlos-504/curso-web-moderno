// Nome padrão de um arquivo webpack -> webpack.config.js

const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UgliflyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


// Exportando todo o objeto de configuração do webpack
module.exports = {
    // Definir se é modo de desenvolvimento ou modo de produção
    mode: modoDev ? 'development' : 'production',
    // Arquivo de entrada (ponto de entrada)
    entry: './src/principal.js',
    // Pasta de saída ou objeto de saída
    output: {
        filename: 'principal.js',
        // definindo caminho da página 
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UgliflyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        // Instanciando a função construtora
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            //loaders
            // linha abaixo vai procuar os arquivos css, scss, sass
            test: /\.s?[ac]ss$/, // regex
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // Interpreta @import, url()...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}