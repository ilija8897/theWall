const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
const path = require('path');

module.exports = {
    entry: __dirname + '/src/app/index.tsx',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src/components/')
        },
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        path: __dirname + '/build',
        filename: 'build.js',
        publicPath: ''
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                context: path.resolve(__dirname, 'context'),
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './images'
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            inject: 'body',
            title: 'EvilMarsians',
            filename: 'index.html'
        }),
        new ImageminPlugin({
            bail: false,
            cache: true,
            imageminOptions: {
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                [
                  "svgo",
                  {
                    plugins: [
                      {
                        removeViewBox: false
                      }
                    ]
                  }
                ]
              ]
            }
          })
    ],
    devServer: {
        contentBase: './src/public',
        port: 3000,
        liveReload: true,
        open: false,
        compress: true,
        hot: true,
        host: 'localhost'
    }
};