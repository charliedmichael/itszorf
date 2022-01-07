const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPlugin = require('html-webpack-plugin');

// const generateHtmlPlugin = (title) => {
//   return new htmlWebpackPlugin({
//     title,
//     filename: 'index.html',
//     template: `./src/#/${title.toLowerCase()}/index.html`,
//   });
// }

// const populateHtmlPlugins = (pagesArray) => {
//   res = [];
//   pagesArray.forEach(page => {
//     res.push(generateHtmlPlugin(page));
//   })
//   return res;
// }

// const pages = populateHtmlPlugins(["jungle-joose", "real-acid", "slurp"]);


module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    index: './src/index.js',
    // junglejoose: '.src/#/jungle-joose/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'itsZORF',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'jungle joose',
      template: './src/jungle-joose.html',
      filename: 'jungle-joose.html',
    }),
    new HtmlWebpackPlugin({
      title: 'slurp',
      template: './src/slurp.html',
      filename: 'slurp.html',
    }),
    new HtmlWebpackPlugin({
      title: 'real acid',
      template: './src/real-acid.html',
      filename: 'real-acid.html',
    }),
    new HtmlWebpackPlugin({
      title: 'road map',
      template: './src/road-map.html',
      filename: 'road-map.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js', // '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        
      },
     
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(gltf)$/,
        use: [
          {
            loader: "gltf-webpack-loader"
          }
        ]
      },
    
      {
        test: /\.(bin|glb)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },

      {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
                options: {
                sources: true,
                }
            }
        ]
      },
      
    ]
  }

 
};