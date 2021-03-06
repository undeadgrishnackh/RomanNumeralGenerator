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
  test('should generate VIII for 8', () => {
    expect(generate(8)).toBe('VIII');
  });
  test('should generate IX for 9', () => {
    expect(generate(9)).toBe('IX');
  });
  test('should generate X for 10', () => {
    expect(generate(10)).toBe('X');
  });
  test('should generate L for 50', () => {
    expect(generate(50)).toBe('L');
  });
  test('should generate IC for 99', () => {
    expect(generate(99)).toBe('XCIX');
  });
  test('should generate C for 100', () => {
    expect(generate(100)).toBe('C');
  });
  test('should generate D for 500', () => {
    expect(generate(500)).toBe('D');
  });
  test('should generate CM for 900', () => {
    expect(generate(900)).toBe('CM');
  });
  test('should generate M for 1000', () => {
    expect(generate(1000)).toBe('M');
  });
});

describe('E2E tests', () => {
  test('should generate XI for 11', () => {
    expect(generate(11)).toBe('XI');
  });
  test('should generate XXII for 22', () => {
    expect(generate(22)).toBe('XXII');
  });
  test('should generate LIII for 53', () => {
    expect(generate(53)).toBe('LIII');
  });
  test('should generate CLIII for 53', () => {
    expect(generate(153)).toBe('CLIII');
  });
  test('should generate MMMCMXCIX for 3999', () => {
    expect(generate(3999)).toBe('MMMCMXCIX');
  });
});
