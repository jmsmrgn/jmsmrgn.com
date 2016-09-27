var rucksack = require('rucksack-css');
var cssnext = require('postcss-cssnext');
var nestedRules = require('postcss-nested');
var nestedAncestors = require('postcss-nested-ancestors');
var simpleVars = require('postcss-simple-vars');

exports.modifyWebpackConfig = function(config) {
  config.merge({
    postcss: [
      rucksack(),
      nestedRules(),
      nestedAncestors(),
      simpleVars(),
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
