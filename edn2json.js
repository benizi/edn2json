#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const peg = require('pegjs');

const commandLineArgs = require('command-line-args');

const options = commandLineArgs([{
  alias: 'i',
  defaultOption: true,
  name: 'inputFile',
  type: String
}]);

const loadFile = (filename) => {
  var filepath = path.resolve(__dirname, filename);
  return fs.readFileSync(filepath, 'utf-8');
};

const parser = peg.generate(loadFile('convert.pegjs'));

const compile = (inputFile) => {
  var outputFile = ((inputFile) => {
    var inputPath = path.parse(inputFile);
    return path.format({
      dir: inputPath.dir,
      base: inputPath.name + '.json'
    });
  })(inputFile);

  var edn = fs.readFileSync(inputFile, 'utf8');
  var data = parser.parse(edn);
  var json = JSON.stringify(data, null, 2);

  fs.writeFileSync(outputFile, json);
  console.log("JSON saved to: " + outputFile);
};

(() => {
  var inputFile = options['inputFile'];
  var stats = fs.statSync(inputFile);
  if (stats.isFile()) {
    compile(inputFile);
  } else {
    throw new Error('Input is not a file.');
  }
})();
