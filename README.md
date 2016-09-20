# edn2json
Convert EDN format to JSON format.

[![Build Status](https://travis-ci.org/jl2922/edn2json.svg?branch=master)](https://travis-ci.org/jl2922/edn2json)

## Installation

```bash
sudo npm install -g edn2json # As CLI.
npm install edn2json # For NodeJS.
```

## Usage

To use as CLI:
```bash
edn2json [path-to-edn-input]
```
By default, it will output JSON with the same filename as the EDN file but with '.json' extension, which can be customized by:
```bash
edn2json [path-to-edn-input] -o [path-to-json-output]
```

To use in NodeJS:
```javascript
var fs = require('fs');
var parser = require('edn2json');

var edn = fs.readFileSync('result.edn', 'utf8');
data = parser.parse(edn); // data is a usual JavaScript object.
```
