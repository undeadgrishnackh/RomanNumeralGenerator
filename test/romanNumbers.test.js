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
  test('should generate II for 2', () => {
    expect(generate(2)).toBe('II');
  });
  test('should generate III for 3', () => {
    expect(generate(3)).toBe('III');
  });
  test('should generate IV for 4', () => {
    expect(generate(4)).toBe('IV');
  });
  test('should generate V for 5', () => {
    expect(generate(5)).toBe('V');
  });
  test('should generate VI for 6', () => {
    expect(generate(6)).toBe('VI');
  });
  test('should generate VII for 7', () => {
    expect(generate(7)).toBe('VII');
  });
});
