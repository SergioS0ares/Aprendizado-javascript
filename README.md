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
10. [Funções](#funções)
11. [Arrow Functions](#arrow-functions)
12. [IIFE - Expressão de Função Invocada Imediatamente](#iife---expressão-de-função-invocada-imediatamente)
13. [Strict Mode](#strict-mode)
14. [Closures](#closures)
15. [Housing](#housing)
16. [Arguments](#arguments)

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
  ```

- Utilização de aspas dentro de strings:
  ```javascript
  console.log('"Texto com Aspas"');
  console.log(`"'Texto Complexo'"`);
  ```

- Conversão de números para strings:
  ```javascript
  console.log(String(12345));
  ```

---

## Tipos Primitivos

- Number:
  ```javascript
  console.log(123); // Inteiro
  console.log(Number("123") + 1); // Conversão e soma
  ```

- Boolean:
  ```javascript
  console.log(true); // Verdadeiro
  console.log(false); // Falso
  ```

- Undefined e Null:
  ```javascript
  console.log(undefined); // Não definido
  console.log(null); // Valor nulo
  ```

- Array:
  ```javascript
  console.log(["Dado 1", "Dado 2"]);
  ```

- Objeto:
  ```javascript
  console.log({ chave: "valor" });
  ```

---

## Operações Matemáticas e Concatenação

- Soma e concatenação:
  ```javascript
  console.log(1 + 1); // Soma
  console.log("Nome: " + "Fulano"); // Concatenação
  ```

- Subtração, multiplicação e divisão:
  ```javascript
  console.log(10 - 5);
  console.log(2 * 3);
  console.log(10 / 2);
  ```

- Resto da divisão:
  ```javascript
  console.log(5 % 2); // Resto
  ```

---

## Declaração de Variáveis e Escopo

- Tipos de variáveis:
  ```javascript
  var nome = "Global"; // Escopo global
  let idade = 25; // Escopo local
  const cidade = "São Paulo"; // Não pode ser reatribuída
  ```

- Escopo de variáveis:
  ```javascript
  {
    let local = "Dentro do bloco";
    console.log(local); // Funciona
  }
  console.log(local); // Erro: variável fora do escopo
  ```

---

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
  ```

---

## Falsy vs Truthy

- Valores falsy:
  ```javascript
  false, 0, "", NaN, undefined, null
  ```

- Valores truthy:
  ```javascript
  // Todos os outros valores diferentes de falsy.
  console.log("texto" ? true : false); // true
  ```

---

## Operador Ternário

- Sintaxe básica:
  ```javascript
  const velocidade = 90;
  const limite = 80;

  velocidade > limite
    ? console.log("Multa!")
    : console.log("Velocidade dentro do limite.");
  ```

---

## Switch e Casos de Uso

- Uso do switch para múltiplos casos:
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
  ```

---

## Funções

- Nome de função:
  ```javascript
  function soma(a, b) {
    return a + b;
  }

  console.log(soma(2, 3));
  ```

- Retorno de função:
  ```javascript
  function retornaNome() {
    return "Dener Troquatte";
  }

  console.log(retornaNome());
  ```

---

## Arrow Functions

- Sintaxe:
  ```javascript
  const somaArrow = (a, b) => a + b;
  console.log(somaArrow(2, 3));
  ```

- Contexto com `this`:
  ```javascript
  const obj = {
    valor: 10,
    func: function () {
      setTimeout(() => {
        console.log(this.valor); // 10
      }, 1000);
    },
  };

  obj.func();
  ```

---

## IIFE - Expressão de Função Invocada Imediatamente

- Exemplo:
  ```javascript
  (function () {
    console.log("Executado imediatamente");
  })();
  ```

---

## Strict Mode

- Exemplo:
  ```javascript
  "use strict";

  function exemplo() {
    teste = "Erro no modo estrito"; // ReferenceError
  }
  ```

---

## Closures

- Definição:
  Uma closure ocorre normalmente quando uma função é declarada dentro do corpo de outra e acessa variáveis do escopo externo.

- Exemplo:
  ```javascript
  function criarContador() {
    let contador = 0;

    return function () {
      contador++;
      return contador;
    };
  }

  const contador = criarContador();
  console.log(contador()); // 1
  console.log(contador()); // 2
  ```

---

## Housing

- Comentário sobre código:
  ```javascript
  //housing: Este é um exemplo de comentário no código explicando sua funcionalidade.
  ```

---

## Arguments

- Definição:
  `arguments` é um objeto semelhante a um array disponível dentro de funções tradicionais, que contém os valores dos parâmetros passados para a função.

- Exemplo:
  ```javascript
  function somaTudo() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }

  console.log(somaTudo(1, 2, 3, 4)); // 10
  
