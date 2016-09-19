var edn2json = require('./convert.js');

describe("edn2json", function() {
  it('should parse simple item', function() {
    var edn = '[{"test-item" 3.33}]';
    console.log(edn);
    var data = edn2json.parse(edn);
    expect(data[0]['test-item']).toEqual(3.33);
  });

  it('should parse array', function() {
    // TODO
  });

  it('should parse object', function() {
    // TODO
  });
});
