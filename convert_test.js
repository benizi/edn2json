var edn2json = require('./convert.js');

describe("edn2json", function() {
  it('should parse simple item', function() {
    var edn = '[{"test-item" 3.33}]';
    var data = edn2json.parse(edn);
    expect(data).toEqual([{
      'test-item': 3.33
    }]);
  });

  it('should parse array', function() {
    var edn = '[{"test-item" [3.33 4.44]}]';
    var data = edn2json.parse(edn);
    expect(data).toEqual([{
      'test-item': [3.33, 4.44]
    }]);
  });

  it('should parse object', function() {
    var edn = '[{"test-item" {"source-value" 3.33 "source-unit" "eV"}}]';
    var data = edn2json.parse(edn);
    expect(data).toEqual([{
      'test-item': {
        'source-value': 3.33,
        'source-unit': 'eV'
      }
    }]);
  });
});
