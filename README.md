# edn2json
Convert EDN format to JSON format.

[![Build Status](https://travis-ci.org/jl2922/edn2json.svg?branch=master)](https://travis-ci.org/jl2922/edn2json)

## Installation

```bash
sudo npm install -g edn2json # CLI.
npm install edn2json # NodeJS.
```

## Usage

### To use as CLI
```bash
edn2json [path-to-edn-input]
```
By default, it will output JSON with the same filename as the EDN file but with '.json' extension, which can be customized by:
```bash
edn2json [path-to-edn-input] -o [path-to-json-output]
```

### To use in NodeJS
```javascript
const parser = require('edn2json');

var ednString = '[{"foo" "bar"}]';
var data = parser.parse(ednString);
var jsonString = JSON.stringify(data); // [{"foo":"bar"}].
```

### To use in browser

First install pegjs compiler and compile `convert.pegjs`:
```bash
sudo npm install -g pegjs
pegjs --format globals --export-var [variable-name] -o [path-to-js-output] convert.pegjs
```
Then in the HTML:
```html
<!-- Suppose the js output is edn-parser.js and variable name is ednParser. -->
<script src="edn-parser.js"></script>

<script>
var ednString = '[{"foo" "bar"}]';
var data = ednParser.parse(ednString);
var jsonString = JSON.stringify(data); // [{"foo":"bar"}].
</script>
```
