var webpack = require('webpack');
var path = require('path');

let MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};

