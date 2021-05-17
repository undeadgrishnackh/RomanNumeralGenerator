const isNegativeNumber = (number) => number < 0;
const isGreaterThan3999 = (number) => number > 3999;
const isNotAnInteger = (number) => !Number.isInteger(number);
const wrongNumber = (number) =>
  isNotAnInteger(number) || isNegativeNumber(number) || isGreaterThan3999(number);

//! ! TODO: this part is too complex and not so readable in both cases switch & ifs
//! ! map and actions should be a nice exploratory exercise.
const generateSingularItem = (number, atomicUnit, midUnit, maxUnit) => {
  if (number === 0) {
    return '';
  }

  if (number === 1 || number === 2 || number === 3) {
    return `${atomicUnit.repeat(number)}`;
  }

  if (number === 4) {
    return atomicUnit + midUnit;
  }

  if (number === 5 || number === 6 || number === 7 || number === 8) {
    return midUnit.concat(`${atomicUnit.repeat(number - 5)}`);
  }

  if (number === 9) {
    return atomicUnit + maxUnit;
  }
};

const getTheUnits = (number) => number % 10;
const generateUnits = (number) => generateSingularItem(number, 'I', 'V', 'X');
const getRomanNumberForUnits = (number) => generateUnits(getTheUnits(number));

const getTheTens = (number) => Math.floor(number / 10) % 10;
const generateTens = (number) => generateSingularItem(number, 'X', 'L', 'C');
const getRomanNumberForTens = (number) => generateTens(getTheTens(number));

const getTheHundreds = (number) => Math.floor(number / 100) % 10;
const generateHundreds = (number) => generateSingularItem(number, 'C', 'D', 'M');
const generateThousands = (number) => generateSingularItem(number, 'M', '', '');

const getThousands = (number) => Math.floor(number / 1000) % 10;
const getRomanNumberForHundreds = (number) => generateHundreds(getTheHundreds(number));
const getRomanNumberForThousands = (number) => generateThousands(getThousands(number));

// ! Public function ------------------------------------------------------
function generate(number) {
  if (wrongNumber(number)) return 'ERROR';
  return (
    getRomanNumberForThousands(number) +
    getRomanNumberForHundreds(number) +
    getRomanNumberForTens(number) +
    getRomanNumberForUnits(number)
  );
}

module.exports = generate;
