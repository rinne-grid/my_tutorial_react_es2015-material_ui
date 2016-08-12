module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    devtool: "inline-source-map",
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, loader: "babel", exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"],
                }
            }
        ]
    }
};