var webpack = require('webpack');
var path = require('path');
var glob = require('glob-all');

let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let PurgecssPlugin = require('purgecss-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/js/index.js',
            './src/styles/main.scss',
            './src/audio/woof.mp3'
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
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
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './images/'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp3)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './audio/'
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
        }),
        new VueLoaderPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['./']
            }
        })
    ]
};

