const isNegativeNumber = (number) => number < 0;
const isGreaterThan3999 = (number) => number > 3999;
const isNotAnInteger = (number) => !Number.isInteger(number);
const wrongNumber = (number) =>
  isNotAnInteger(number) || isNegativeNumber(number) || isGreaterThan3999(number);

const getTheUnits = (number) => number % 10;
const getTheTens = (number) => Math.floor(number / 10) % 10;

const generateSingularItem = (number, atomicUnit, midUnit, maxUnit) => {
  switch (number) {
    case 0:
      return '';
    case 1:
    case 2:
    case 3:
      return `${atomicUnit.repeat(number)}`;
    case 4:
      return atomicUnit + midUnit;
    case 5:
    case 6:
    case 7:
    case 8:
      return midUnit.concat(`${atomicUnit.repeat(number - 5)}`);
    case 9:
      return atomicUnit + maxUnit;
    // no default
  }
};

const generateUnits = (number) => generateSingularItem(number, 'I', 'V', 'X');
const generateTens = (number) => generateSingularItem(number, 'X', 'L', 'C');

const getRomanNumberForUnits = (number) => generateUnits(getTheUnits(number));
const getRomanNumberForTens = (number) => generateTens(getTheTens(number));

// ! Public function ------------------------------------------------------
function generate(number) {
  if (wrongNumber(number)) return 'ERROR';
  return getRomanNumberForTens(number) + getRomanNumberForUnits(number);
}

module.exports = generate;
