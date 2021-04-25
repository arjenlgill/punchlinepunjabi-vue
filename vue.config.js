const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminWebp = require('imagemin-webp');

module.exports = {
  pages: {  
    'index': {
        entry: './src/pages/home/main.js',
        template: 'public/index.html',
        title: 'Home',
        filename: 'index.html',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about': {
        entry: './src/pages/about/main.js',
        template: 'public/index.html',
        filename: 'about.html',
        title: 'About',
        chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    'features': {
        entry: './src/pages/features/main.js',
        template: 'public/index.html',
        filename: 'features.html',
        title: 'Features',
        chunks: ['chunk-vendors', 'chunk-common', 'features']
    },
    'playlists': {
        entry: './src/pages/playlists/main.js',
        template: 'public/index.html',
        filename: 'playlists.html',
        title: 'Playlists',
        chunks: ['chunk-vendors', 'chunk-common', 'playlists']
    },
    'dictionary': {
        entry: './src/pages/dictionary/main.js',
        template: 'public/index.html',
        filename: 'dictionary.html',
        title: 'Dictionary',
        chunks: ['chunk-vendors', 'chunk-common', 'dictionary']
    },
    //Singles
    'singleone': {
      entry: './src/subpages/singleone/main.js',
      template: 'public/index.html',
      filename: 'singleone.html',
      title: 'Steel Banglez X Sidhu Moose Wala: \'47\' Track Review',
      chunks: ['chunk-vendors', 'chunk-common', 'singleone']
  },
  },
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new ImageminPlugin({
        pngquant: {
          quality: '90-95'
        },
        jpegtran: {
          progressive: true

        },
        plugins: [
          imageminMozjpeg({
            quality: 85
          }),
          imageminWebp({quality: 80})
        ]
      })
    ],
 
  },

  pluginOptions: {
    critical: {
      src: "index.html",
      dest: "index.html",
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false
      }
    },

    compression: {
      brotli: {
        filename: "[file].br[query]",
        algorithm: "brotliCompress",
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8
      },
      gzip: {
        filename: "[file].gz[query]",
        algorithm: "gzip",
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8
      }
    }
  }
}
