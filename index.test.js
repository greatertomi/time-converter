const { convertTimeToWords } = require('./index');

// - 2:00 > two o'clock
// - 2:03 > three past two
// - 2:11 > eleven past two
// - 2:15 > quarter past two
// - 2:30 > half past two
// - 2:33 > twenty seven to three
// - 2:40 > twenty to three
// - 2:55 > five to three

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
});
