var webpack = require('webpack');
var path = require('path');
var glob = require('glob-all');

let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/js/index.js',
            './src/styles/main.scss'
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|otf|svg|eot|woff2?)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts/'
                    }
                }
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './images/'
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new PurgecssPlugin({
            paths: glob.sync([
                path.join(__dirname, './index.html'),
                path.join(__dirname, './src/js/**/*.vue')
            ])
        })
    ]
};

