const CarInsurance = require('../../entities/CarInsurance');

describe('Car Insurance', () => {

  test('should return a carInsurance instance', () => {
    const carInsurance = new CarInsurance([]);
    expect(carInsurance).not.toBe(null);
  });

  test('should throw an error if products is not passed', () => {
    expect(() => new CarInsurance()).toThrow('The products is not an array.');
  });

});
