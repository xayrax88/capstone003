
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin")

let mode = "development";


if (process.env.NODE_ENV === "production") {
    mode = "production";
}
module.exports = {
    mode: mode,


    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },

        ],
    },

    plugins: [new MiniCssExtractPlugin(), new HTMLWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html'
    })],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: "only",
    },
};