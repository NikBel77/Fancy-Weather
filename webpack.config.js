const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            title: 'Fancy Weather'
        })
    ],
}

const dev = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}

const prod = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}

const lint = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader'
            }
        ]
    }
}

module.exports = function(env) {

    if(env === 'development') {
        return Object.assign(
            {},
            config,
            dev
        )
    }
    else if(env === 'production') {
        return Object.assign(
            {},
            config,
            prod
        )
    }
    else if(env === 'lint') {
        return Object.assign(
            {},
            config,
            lint
        )
    }
}