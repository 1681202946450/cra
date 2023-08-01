// // "build": "webpack --config webpack.config.js --progress --stats-error-details",


const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const fs = require('fs');
const TerserPlugin = require("terser-webpack-plugin")

// 获取组件库的路径
const componentsPath = path.resolve(__dirname, 'src/components');

// 获取所有组件名称
const componentNames = fs.readdirSync(componentsPath);

// 生成入口配置
const entry = {};
componentNames.forEach((name) => {
    entry[name] = path.resolve(componentsPath, name, 'index.ts');
});
console.log('entry', entry)
module.exports = {
    mode: "production",
    entry,
    // output: {
    //     filename: '[name].js',
    //     library: 'largeNumber',
    //     libraryTarget: 'umd',
    //     libraryExport: 'default'
    // },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({
            extractComments: false, //不将注释提取到单独的文件中
        })],
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: ["url-loader"],
            },
            {
                test: /\.(tsx|ts)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    resolve: {
        //后缀名自动补全，引入时可不必写后缀名
        extensions: [".ts", ".tsx", ".js", ".jsx", ".less", ".css"],
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
};