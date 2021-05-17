const generate = require('../src/romanNumbers');

describe('Function Interface', () => {
  test('should reject negative numbers', () => {
    expect(generate(-1)).toBe('ERROR');
  });
  test('should reject numbers greater than 3999', () => {
    expect(generate(4000)).toBe('ERROR');
  });
});
