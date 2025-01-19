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
17. [O que é um Objeto](#o-que-é-um-objeto)  
18. [Propriedades, Métodos e Valores Curtos](#propriedades-métodos-e-valores-curtos)  
19. [Acessando Valores do Objeto](#acessando-valores-do-objeto)  
20. [Destructuring](#destructuring)  
21. [Verificando a Existência de Propriedades](#verificando-a-existência-de-propriedades)  
22. [Adicionando e Atualizando Propriedades no Objeto](#adicionando-e-atualizando-propriedades-no-objeto)  
23. [Removendo a Propriedade do Objeto](#removendo-a-propriedade-do-objeto)  
24. [Mesclando e Clonando Objetos](#mesclando-e-clonando-objetos)  
25. [Clonagem de Objetos Rasos e Profundos](#clonagem-de-objetos-rasos-e-profundos)


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
    return "Sérgio";
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

- Definição: O *hoisting* (elevação) é um comportamento do JavaScript no qual declarações de variáveis e funções são movidas para o topo do escopo durante a execução. Isso significa que você pode usar uma variável ou função antes de declará-la no código.

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
  
## Objetos em JavaScript

### O que é um Objeto?
Objetos são coleções de propriedades, onde cada propriedade possui uma chave e um valor. 
Elas podem ser acessadas e manipuladas dinamicamente.

Exemplo:
```javascript
let Tenis = {
    tipo: "Tenis de Corrida",
    cardaco: "G",
    estoque: false,
    tamanho: {
      palmilha: 39,
      tenis: 40,
      caixa: {
        altura: 35,
        largura: 40,
        profunidade: 10,
      },
    },
    marcaArrayValores: ["Nike", "Adidas", "etc"],
    marcaArrayObj: [
      { nome: "Nike" },
      { nome: "Adidas" },
      { nome: "etc" },
    ],
    getMarcaArrayValores: function (param) {
      return this.marcaArrayObj[param];
    },
    getMarcaArrayObj: function (param) {
      return this.marcaArrayObj[param].nome;
    },
  };

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);
```

### Propriedade, Métodos e Valores Curtos
```javascript
function Tenis(t, estoque, preco) {
    return { tamanho: t, estoque, preco };
}
console.log(Tenis(35, true, "R$ 35"));

const tamanho = 35;
const estoque = true;
const preco = "R$ 35";

const Tenis2 = { tamanho, estoque, preco };
console.log(Tenis2);

const Tenis3 = {
    getTamanho() {
        return 35;
    },
};
console.log(Tenis3.getTamanho());
```

### Acessando Valores do Objeto
```javascript
const Tenis = { tamanho: 45, marca: "Nike" };
console.log(Tenis.marca);
console.log(Tenis.tamanho);
```

### Destructuring
```javascript
const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123456,
    n: 5,
    link: { a: "a é = a", b: { c: "C é = c" } },
};

const { tamanho, estoque, marcas = "Não possui Marca alguma!" } = Tenis;
console.log(tamanho, estoque, marcas);
```

### Verificando a Existência de Propriedade
```javascript
const Tenis = { tamanho: 45, estoque: true };
console.log(Tenis.hasOwnProperty("tamanho"));
if ("tamanho" in Tenis) console.log("Existe tamanho");
```

### Adicionando e Atualizando Dados do Objeto
```javascript
let Tenis = { tamanho: 45, estoque: true };
Tenis.tamanho = 42;
Tenis["preco"] = "R$ 42";
console.log(Tenis);
```

### Removendo a Propriedade do Objeto
```javascript
let Tenis = { tamanho: 45, estoque: true };
delete Tenis.estoque;
console.log(Tenis);
```

### Mesclando e Clonando Objetos
```javascript
let Tenis = { tamanho: 45, estoque: true };
let link = { link: { a: "a", b: { c: "c" } } };

let mesclar1 = Object.assign(Tenis, link);
let mesclar2 = { ...Tenis, ...link };
console.log(mesclar1);
console.log(mesclar2);
```

### Clonagem de Objetos Rasos e Profundos
```javascript
let Tenis = { tamanho: 45, estoque: true };
let link = { link: { a: "a", b: { c: "c" } } };

function cloneObject(objc) {
    return JSON.parse(JSON.stringify(objc));
}

let clone1 = cloneObject(Tenis);
let mesclar1 = Object.assign(cloneObject(Tenis), cloneObject(link));
let mesclar2 = { ...cloneObject(Tenis), ...cloneObject(link) };

console.log(clone1);
console.log(mesclar1);
console.log(mesclar2);
```
