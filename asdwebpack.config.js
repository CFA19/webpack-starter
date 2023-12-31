const HtmlWebPackPlugin = require('html-webpack-plugin'); 
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    // mode: 'development',
    mode: 'production',
    optimization:{
        minimizer: [new CssMinimizerPlugin() ]
    },

    module: {
        rules: [
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
            filename: './index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
    ]
}

