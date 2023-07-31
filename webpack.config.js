// // "build": "webpack --config webpack.config.js --progress --stats-error-details",


const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: {
        'large-number': './src/index.ts',
        // 'large-number.min': './src/index.js'
      },
      output: {
        filename: '[name].js',
        library: 'largeNumber',
        libraryTarget: 'umd',
        libraryExport: 'default'
      },
  
    // output: {
    //     filename: "fqb-components.js",
    //     path: path.resolve(__dirname, "./lib"),
    //     library: "fqb-components",
    //     libraryTarget: "umd",
    // },
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
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
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