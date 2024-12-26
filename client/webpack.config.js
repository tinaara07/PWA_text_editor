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
        template: './src/index.html',
        filename: 'index.html',
      }),
      // Inject the custom service worker
      new InjectManifest({
        swSrc: './src-sw.js', // Your custom service worker file
        swDest: 'src-sw.js', // Output service worker file
      }),
      // Configure PWA manifest
      new WebpackPwaManifest({
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your app description',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/icon-192x192.png'),
            sizes: [192, 512], // multiple sizes
            destination: path.join('icons'),
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