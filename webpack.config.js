var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: [
            './src/js/index.js'
        ]
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: []
    },
    plugins: [
    
    ]
};

