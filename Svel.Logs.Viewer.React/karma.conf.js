// Karma configuration
// Generated on Thu Jul 12 2018 16:23:41 GMT+0500 (RTZ 4 (зима))
var webpack = require('webpack');

module.exports = function(config) {
    config.set({
         plugins: [
             "karma-webpack",
             "karma-jasmine",
             "karma-chrome-launcher"

        ],
        browsers: ['Chrome'], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: ['jasmine'],
        files: [
            './App/Tests/*.js',
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack'] //preprocess with webpack and our sourcemap loader
        },
        reporters: ['dots'], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
                ]
            }
        },
        webpackServer: {
            noInfo: false //please don't spam the console when running in karma!
        }
    });
}
