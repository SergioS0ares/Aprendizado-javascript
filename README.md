# 📘 Aprendizado em JavaScript

Este repositório contém meus estudos e experimentos em JavaScript, incluindo conceitos básicos, boas práticas e exemplos práticos.

## Índice

1. [Introdução ao JavaScript](#introdução-ao-javascript)
2. [Strings](#strings)
3. [Tipos Primitivos](#tipos-primitivos)
4. [Operações Matemáticas e Concatenação](#operações-matemáticas-e-concatenação)
5. [Declaração de Variáveis e Escopo](#declaração-de-variáveis-e-escopo)
6. [Estruturas Condicionais](#estruturas-condicionais)
7. [Falsy vs Truthy](#falsy-vs-truthy)
8. [Operador Ternário](#operador-ternário)
9. [Switch e Casos de Uso](#switch-e-casos-de-uso)

---

## Introdução ao JavaScript

- Demonstração básica com "Olá Mundo".
- Como incluir JavaScript no HTML:
  - Diretamente na tag `<script>`.
  - Importando um arquivo `.js` externo.
  - Uso do atributo `defer` para carregar o JavaScript após o HTML ser carregado.

---

## Strings

- Como criar strings:
  ```javascript
  console.log("Texto com aspas duplas");
  console.log('Texto com aspas simples');
  console.log(`Texto com crases`);

- Utilização de aspas dentro de strings:
  ```javascript
  console.log('"Texto com Aspas"');
  console.log(`"'Texto Complexo'"`);


- Conversão de números para strings:
  ```javascript
  console.log(String(12345));


## Tipos Primitivos

- Number:
  ```javascript
  console.log(123); // Inteiro
  console.log(Number("123") + 1); // Conversão e soma

- Boolean:
  ```javascript
  console.log(true); // Verdadeiro
  console.log(false); // Falso




- Undefined e Null:
  ```javascript
  console.log(undefined); // Não definido
  console.log(null); // Valor nulo


- Array:
  ```javascript
  console.log(["Dado 1", "Dado 2"]);


- Objeto:
  ```javascript
  console.log({ chave: "valor" });


## Operações Matemáticas e Concatenação

- Soma e concatenação:
  ```javascript
  console.log(1 + 1); // Soma
  console.log("Nome: " + "Fulano"); // Concatenação


- Subtração, multiplicação e divisão:
  ```javascript
  console.log(10 - 5);
  console.log(2 * 3);
  console.log(10 / 2);

- Resto da divisão:
  ```javascript
  console.log(5 % 2); // Resto


## Declaração de Variáveis e Escopo

- Tipos de variáveis:
  ```javascript
  var nome = "Global"; // Escopo global
  let idade = 25; // Escopo local
  const cidade = "São Paulo"; // Não pode ser reatribuída


- Escopo de variáveis:
  ```javascript
  {
    let local = "Dentro do bloco";
    console.log(local); // Funciona
  }
  console.log(local); // Erro: variável fora do escopo

## Estruturas Condicionais

- If, else if e else:
  ```javascript
  let saldo = -10;

  if (saldo > 0) {
    console.log("Saldo positivo");
  } else if (saldo === 0) {
    console.log("Saldo zerado");
  } else {
    console.log("Saldo negativo");
  }

- Falsy vs Truthy:
  ```javascript
  // Valores falsy:
  false, 0, "", NaN, undefined, null

  // Valores truthy:
  Todos os outros valores diferentes de falsy.

- Operador Ternário
  Sintaxe básica:
  ```javascript
  const velocidade = 90;
  const limite = 80;

  velocidade > limite
    ? console.log("Multa!")
    : console.log("Velocidade dentro do limite.");


- Switch e Casos de Uso
  Uso do switch para múltiplos casos:
  ```javascript
  const mes = 1;

  switch (mes) {
    case 1:
      console.log("Janeiro");
      break;
    case 2:
      console.log("Fevereiro");
      break;
    default:
      console.log("Mês inválido");
  }
