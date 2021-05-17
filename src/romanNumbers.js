const isNegativeNumber = (number) => number < 0;
const isGreaterThan3999 = (number) => number > 3999;
const isNotAnInteger = (number) => !Number.isInteger(number);
const wrongNumber = (number) =>
  isNotAnInteger(number) || isNegativeNumber(number) || isGreaterThan3999(number);

function generateUnits(number) {
  // eslint-disable-next-line default-case
  switch (number) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
  }
}

function generate(number) {
  if (wrongNumber(number)) return 'ERROR';
  return generateUnits(number);
}

module.exports = generate;
