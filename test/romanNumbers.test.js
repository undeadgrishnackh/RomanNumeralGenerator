const generate = require('../src/romanNumbers');

describe('Function Interface', () => {
  test('should reject negative numbers', () => {
    expect(generate(-1)).toBe('ERROR');
  });
});
