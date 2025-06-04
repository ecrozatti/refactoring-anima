# 🧮 Validador de CPF (TypeScript)

Este projeto implementa/refatora uma função de validação de CPF em TypeScript, utilizando boas práticas de desenvolvimento, testes automatizados com Jest e ferramentas de qualidade como ESLint e Prettier. (teste para vaga interna)

---

## ✅ Requisitos validados

- CPFs deve conter 11 dígitos numéricos.
- Podem conter ou não pontuação (`.` e `-`).
- CPFs com todos os dígitos iguais são considerados inválidos.

---

## ⚙️ Como rodar o projeto

### 1. Instale as dependências
```bash
npm install
```

### 2. Rode os testes
```bash
npm test
```

### 3. Rode via terminal

Valide no terminal executando o comando abaixo comF como parâmetro:
```bash
npm run dev 639.725.330-98
```

---

## 🧪 Testes

Os testes foram escritos com **Jest**, seguindo a abordagem **BDD (Behavior-Driven Development)**, utilizando os blocos `Given`, `When`, `Then` para clareza dos cenários:

### Exemplos de cenários testados:

- ✅ CPF válido → deve retornar `true`
- ❌ CPF com dígitos verificadores errados → deve retornar `false`
- ❌ CPF com todos os dígitos iguais → deve retornar `false`
- ❌ CPF com tamanho inválido → deve retornar `false`
- ❌ CPF vazio → deve retornar `false`

---

## ✨ Boas práticas aplicadas

| Prática | Descrição |
|--------|-----------|
| **SRP (Single Responsibility Principle)** | A função `validateCPF` faz apenas a validação, seguindo o princípio da responsabilidade única. |
| **Early return** | Torna o código mais limpo, evitando indentação desnecessária. |
| **Função auxiliar interna** | `calculateCheckDigit` evita repetição de lógica para o cálculo dos dígitos verificadores. |
| **Regex** | Usado para limpar a entrada (remover `.`, `-`, espaços) e identificar CPFs inválidos com todos os dígitos iguais. |
| **Testes automatizados** | Garantem segurança ao código e facilitam manutenção. |
| **Lint e Prettier** | Garantem padronização e legibilidade do código. |

---

## 📁 Estrutura do projeto

```
.
├── src/
│   └── cpf.ts              # Função principal de validação de CPF
├── tests/
│   └── cpf.spec.ts         # Testes unitários com Jest
├── jest.config.ts          # Configuração do Jest
├── tsconfig.json           # Configuração do TypeScript
├── .eslintrc.json          # Regras do ESLint
├── .prettierrc             # Configurações do Prettier
├── package.json
└── README.md
```

---

## 🔧 Scripts disponíveis

```json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "test": "jest",
  "lint": "eslint 'src/**/*.ts'",
  "lint:fix": "eslint 'src/**/*.ts' --fix",
  "format": "prettier --write 'src/**/*.ts'"
},
```

---

## 📦 Principais dependências utilizadas

- `typescript` - Tipagem estática e compilação TS → JS
- `jest` + `ts-jest` - Testes automatizados com suporte a TypeScript
- `eslint` - Linter para garantir padrões de código
- `prettier` - Formatter para manter o estilo consistente

---

## 📌 Requisitos para rodar o projeto

- Node.js (v18+ recomendado)
- npm ou yarn
- TypeScript
- Jest (`ts-jest`)
- ESLint (v8+)
- Prettier

---

## 🎯 Resultados obtidos

- Rodando via terminal com alguns CPFs:
![alt text](./assets/run.png)

- Rodando os testes:
![alt text](./assets/tests.png)
