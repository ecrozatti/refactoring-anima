import { calculateCheckDigit, validateCPF } from '../src/cpf';

describe('REFACTORING-ANIMA', () => {
  describe('calculateCheckDigit', () => {
    it('should correctly calculate the first check digit for known input', () => {
      const cpfPart = '111444777'; // os 9 primeiros dígitos
      const multiplier = 10;
      const digit = calculateCheckDigit(cpfPart, multiplier);
      expect(digit).toBe(3); // Esperado 111.444.777-35
    });

    it('should correctly calculate the second check digit for known input', () => {
      const cpfPart = '1114447773';
      const multiplier = 11;
      const digit = calculateCheckDigit(cpfPart, multiplier);
      expect(digit).toBe(5); // Esperado 111.444.777-35
    });

    it('should return 0 when the rest is less than 2', () => {
      const cpfPart = '000000000';
      const multiplier = 10;
      const digit = calculateCheckDigit(cpfPart, multiplier);
      expect(digit).toBe(0);
    });
  });

  describe('validateCPF', () => {
    it('should return true for a valid CPF', () => {
      const cpf = '111.444.777-35'; // GIVEN
      const result = validateCPF(cpf); // WHEN
      expect(result).toBe(true); // THEN
    });

    it('should return false for a CPF with wrong check digits', () => {
      const cpf = '111.444.777-00';
      const result = validateCPF(cpf);
      expect(result).toBe(false);
    });

    it('should return false for CPF with all digits equal', () => {
      const cpf = '111.111.111-11';
      const result = validateCPF(cpf);
      expect(result).toBe(false);
    });

    it('should return false for CPF with less than 11 digits', () => {
      const cpf = '123';
      const result = validateCPF(cpf);
      expect(result).toBe(false);
    });

    it('should return false for an empty string', () => {
      const cpf = '';
      const result = validateCPF(cpf);
      expect(result).toBe(false);
    });
  });
});
