# edn2json
Convert OpenKIM edn json to conventional json (object).

[![Build Status](https://travis-ci.org/jl2922/edn2json.svg?branch=master)](https://travis-ci.org/jl2922/edn2json)

## Installation

```bash
sudo npm install -g edn2json # As CLI.
sudo npm install edn2json # For NodeJS.
```

## Usage

To use as CLI:
```bash
edn2json [path-to-edn]
```

To use in NodeJS:
```javascript
var fs = require('fs');
var parser = require('edn2json');

var edn = fs.readFileSync('result.edn', 'utf8');
data = parser.parse(edn); // data is a usual JavaScript object.

// Save to JSON file.
fs.writeFileSync('result.json', JSON.stringify(data, null, 2));
```
