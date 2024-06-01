const path = require('path')

const config = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}

const generatorConfig = {
  entry: {
    app: './src/generator/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}

const popupConfig = {
  ...config,
  
  entry: {
    app: './src/popup/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'popup'),
    filename: 'index.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
}

module.exports = [
  generatorConfig,
  popupConfig
];
