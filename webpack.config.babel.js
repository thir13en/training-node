import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const projectName = 'VanillaJS boilerplate';
const indexPath = 'src/js/index.js';
const templatePath = 'src/index.template.html';

module.exports = {
  entry: {
    app: path.join(__dirname, indexPath)
  },
  output: {
    filename: 'main.js',
    sourceMapFilename: "main.map",
    libraryTarget: 'var',
    library: 'main'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: projectName,
      template: path.join(__dirname, templatePath)
    })
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
};
