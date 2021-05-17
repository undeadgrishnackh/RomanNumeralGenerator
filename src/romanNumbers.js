const isNegativeNumber = (number) => number < 0;
const isGreaterThan3999 = (number) => number > 3999;

function generate(number) {
  if (isNegativeNumber(number) || isGreaterThan3999(number)) return 'ERROR';
}

module.exports = generate;
