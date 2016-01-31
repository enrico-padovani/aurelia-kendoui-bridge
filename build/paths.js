var path = require('path');
var fs = require('fs');

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: appRoot + '**/*.css',
  json: appRoot + '**/*.json',
  output: 'devbuild/',
  releaseOutput: 'dist/',
  sample: 'sample',
  sampleSrc: './sample/src/**/*.js',
  doc:'./doc',
  unit: 'test/unit/**/*.js',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  packageName: pkg.name,
};
