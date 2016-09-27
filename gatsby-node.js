var rucksack = require('rucksack-css');
var cssnext = require('postcss-cssnext');
var nested = require('postcss-nested');

exports.modifyWebpackConfig = function(config, env) {
  config.merge({
    postcss: [
      rucksack(),
      nested(),
      cssnext({
        browsers: ['>1%', 'last 2 versions']
      })
    ]
  });

  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  });

  return config;
};
