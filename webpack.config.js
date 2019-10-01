var webpack = require('webpack');
var path = require('path');

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
                use : ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: []
};

