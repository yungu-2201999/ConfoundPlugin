const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
          test: /\.conf$/,
            use: [
             {
              loader: path.join(__dirname, '../loader/loader.js'),
              options: {
                name: 'conf.json'
               }
             }
            ]
        },
        
    ]
  }
};