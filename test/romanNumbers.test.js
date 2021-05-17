const generate = require('../src/romanNumbers');

describe('Function Interface - Guardians to prevent bad input', () => {
  test('should reject negative numbers', () => {
    expect(generate(-1)).toBe('ERROR');
  });
  test('should reject numbers greater than 3999', () => {
    expect(generate(4000)).toBe('ERROR');
  });
  test('should reject NOT integers', () => {
    expect(generate('abcd')).toBe('ERROR');
  });
});

describe('Roman Number Generator', () => {
  test('should generate I for 1', () => {
    expect(generate(1)).toBe('I');
  });
});
