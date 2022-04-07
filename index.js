const hourArray = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
];
const minutes = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'thirty',
];
// expecting time to be a string in the format like '8:15' or '12:30 or 2:45'
function convertTimeToWords(time) {
  const hour = +time.split(':')[0];
  const minute = +time.split(':')[1];
  const hourWord = hour === 12 ? 'twelve' : hourArray[(hour % 12) - 1];
  if (time === '0:00') {
    return 'midnight';
  }
  if (minute === 0) return `${hourWord} o'clock`;
  if (minute === 15) return `quarter past ${hourWord}`;
  if (minute === 45) return `quarter to ${hourArray[hour]}`;
  if (minute === 30) return `half past ${hourWord}`;

  if (minute < 30) return `${minutes[minute]} past ${hourWord}`;
  if (minute > 30) {
    return `${minutes[60 - minute]} to ${hourArray[hour]}`;
  }

  return 'Could not convert this to word';
}

module.exports = { convertTimeToWords };
