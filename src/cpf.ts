// Função para calcular cada dígito verificador do CPF
export function calculateCheckDigit(
  cpfPart: string,
  startingMultiplier: number,
): number {
  // Retorna se não conter apenas dígitos
  if (!/^\d+$/.test(cpfPart)) return 0;

  let total = 0;
  for (let i = 0; i < cpfPart.length; i++) {
    total += parseInt(cpfPart[i], 10) * (startingMultiplier - i);
  }
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

export function validateCPF(cpf: string): boolean {
  if (!cpf) return false;

  // Remove caracteres não numéricos
  const cleanedCPF = cpf.replace(/[.\-\s]/g, '');

  if (cleanedCPF.length !== 11) return false;

  // Rejeita CPF com os dígitos iguais
  if (/^(\d)\1{10}$/.test(cleanedCPF)) return false;

  // Calcula o primeiro dígito verificador com os 9 primeiros números
  const firstNineDigits = cleanedCPF.substring(0, 9);
  const firstDigit = calculateCheckDigit(firstNineDigits, 10);

  // Calcula o segundo dígito verificador usando os 9 primeiros + o primeiro dígito calculado
  const secondDigit = calculateCheckDigit(firstNineDigits + firstDigit, 11);

  // Extrai os dois últimos dígitos do CPF para comparar com os calculados
  const checkDigits = cleanedCPF.substring(9);

  // Valida os dígitos verificadores com os calculados
  return checkDigits === `${firstDigit}${secondDigit}`;
}
