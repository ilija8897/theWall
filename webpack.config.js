const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
        filename: 'main.js',
        assetModuleFilename: 'images/[name][ext]'
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(tsx|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
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
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            title: 'EvilMarsians',
            filename: 'index.html'
        }),
    ],
    devServer: {
        // contentBase: './src/public',
        static: './build',
        // inline: true,
        port: 3000,
        liveReload: true,
        open: false,
        compress: true,
        hot: true,
        host: 'localhost'
    }
};