import { validateCPF } from './cpf';

// Se o script for executado via terminal
if (require.main === module) {
  const inputCPF = process.argv[2];

  if (!inputCPF) {
    console.error('Insira um CPF como argumento. Ex: npm start 123.456.789-00');
    process.exit(1);
  }

  const isValid = validateCPF(inputCPF);
  const result = isValid ? '✅ CPF Válido' : '❌ CPF Inválido';

  console.log(result);
}

export { validateCPF };
