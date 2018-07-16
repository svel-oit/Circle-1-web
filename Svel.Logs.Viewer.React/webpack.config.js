'use strict';
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const bundleFolder = "./wwwroot/assets/";
const srcFolder = "./App/"

module.exports = {
    entry: [
        srcFolder + "Index.jsx" // исходники
    ],
    devtool: "source-map", // карта изменений для отладчика
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: "bundle.js", // упакованый файл
        publicPath: 'assets/',
        path: path.resolve(__dirname, bundleFolder),
        sourceMapFilename: 'bundle.map.js'
    },
    plugins: [new ExtractTextPlugin("styles.css") ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    }
};