const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Generate HTML file
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        title:'Text Editor',
      }),
      // Inject the custom service worker
      new InjectManifest({
        swSrc: './src-sw.js', // Your custom service worker file
        swDest: 'src-sw.js', // Output service worker file
      }),
      // Configure PWA manifest
      new WebpackPwaManifest({
        fingerprints: false,
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        description: 'Takes note with JavaScript syntax highlighting',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
            destination: path.join('assets','icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'], // Loaders for CSS
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', // Loader for Babel
            options: {
              presets: ['@babel/preset-env'], // Preset for ES6+
            },
          },
        },
      ],
    },
  };
};