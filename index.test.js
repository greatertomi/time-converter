const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it("Handles o'clock properly - 8:00", () => {
    const timeInWords = convertTimeToWords('8:00');
    expect(timeInWords).toBe("eight o'clock");
  });

  it('Handles past time properly - 8:03', () => {
    const timeInWords = convertTimeToWords('8:03');
    expect(timeInWords).toBe('three past eight');
  });

  it('Handles quarter past properly - 8:15', () => {
    const timeInWords = convertTimeToWords('8:15');
    expect(timeInWords).toBe('quarter past eight');
  });

  it('Handles minutes to properly - 8:40', () => {
    const timeInWords = convertTimeToWords('8:40');
    expect(timeInWords).toBe('twenty to nine');
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
