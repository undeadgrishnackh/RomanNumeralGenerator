const isNotAValidNumber = (number) => number < 0;

function generate(number) {
  if (isNotAValidNumber(number)) return 'ERROR';
}

module.exports = generate;
