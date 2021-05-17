const isNegativeNumber = (number) => number < 0;
const isGreaterThan3999 = (number) => number > 3999;
const isNotAnInteger = (number) => !Number.isInteger(number);
const wrongNumber = (number) =>
  isNotAnInteger(number) || isNegativeNumber(number) || isGreaterThan3999(number);

function generateUnits(number) {
  switch (number) {
    case 1:
    case 2:
    case 3:
      return `${'I'.repeat(number)}`;
    case 4:
      return 'IV';
    case 5:
    case 6:
    case 7:
    case 8:
      return 'V'.concat(`${'I'.repeat(number - 5)}`);
    case 9:
      return 'IX';
    // no default
  }
}

function generate(number) {
  if (wrongNumber(number)) return 'ERROR';
  return generateUnits(number);
}

module.exports = generate;
