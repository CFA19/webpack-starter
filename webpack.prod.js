const HtmlWebPackPlugin = require('html-webpack-plugin'); 
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');



module.exports = {
    mode: 'production',
    // optimization:{
    //     minimizer: [new CssMinimizerPlugin() ]
    // },
    output:{
        filename: 'main.[contenthash].js',
        clean: true,
    },

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },


            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /styles\.css$/,
                use:[
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },


            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { 
                           
                            minimize: false }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',

        }),
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
    ],
}
