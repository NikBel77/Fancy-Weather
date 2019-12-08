const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
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
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            title: 'Fancy Weather'
        })
    ],
}

const prod = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            title: 'Fancy Weather'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
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
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            title: 'Fancy Weather'
        })
    ],
}

module.exports = function (env) {

    if (env === 'production') {
        return Object.assign(
            {},
            config,
            prod
        )
    }
    else if (env === 'lint') {
        return Object.assign(
            {},
            config,
            lint
        )
    }
    else {
        return Object.assign(
            {},
            config,
            dev
        )
    }
}