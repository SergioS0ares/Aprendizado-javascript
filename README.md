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
26. [O que é um Array](#o-que-é-um-array)
27. [Índices e Elementos](#índices-e-elementos)
28. [Matrizes Multidimensionais](#matrizes-multidimensionais)
29. [Destructuring Array](#destructuring-array)


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
  
---
## Objetos em JavaScript

### O que é um Objeto?
- Objetos são coleções de propriedades, onde cada propriedade possui uma chave e um valor. 
Elas podem ser acessadas e manipuladas dinamicamente.

- Exemplo:
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

### Propriedades, Métodos e Valores Curtos
- Este tópico aborda como objetos podem ser estruturados de forma concisa, utilizando nomes de variáveis como valores de propriedades diretamente, além de métodos simplificados para declarar funções dentro de objetos.

- Exemplo:
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
- Demonstra como acessar os valores de propriedades de um objeto utilizando a notação de ponto (`obj.propriedade`) e a notação de colchetes (`obj['propriedade']`).

- Exemplo:
```javascript
const Tenis = { tamanho: 45, marca: "Nike" };
console.log(Tenis.marca);
console.log(Tenis.tamanho);
```

### Destructuring
- Explica como extrair valores de propriedades de um objeto diretamente em variáveis usando a técnica de destructuring. Também aborda como definir valores padrão caso a propriedade não exista no objeto.

- Exemplo:
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
- Mostra como verificar se uma propriedade existe em um objeto utilizando métodos como `hasOwnProperty` e o operador `in`.

- Exemplo:
```javascript
const Tenis = { tamanho: 45, estoque: true };
console.log(Tenis.hasOwnProperty("tamanho"));
if ("tamanho" in Tenis) console.log("Existe tamanho");
```

### Adicionando e Atualizando Dados do Objeto
- Explica como adicionar novas propriedades a um objeto ou atualizar valores de propriedades existentes usando a notação de ponto ou de colchetes.

- Exemplo:
```javascript
let Tenis = { tamanho: 45, estoque: true };
Tenis.tamanho = 42;
Tenis["preco"] = "R$ 42";
console.log(Tenis);
```

### Removendo a Propriedade do Objeto
- Descreve como remover propriedades de um objeto utilizando o operador `delete` e as implicações dessa operação no objeto.

- Exemplo:
```javascript
let Tenis = { tamanho: 45, estoque: true };
delete Tenis.estoque;
console.log(Tenis);
```

### Mesclando e Clonando Objetos
- Aborda como combinar dois ou mais objetos em um único objeto utilizando `Object.assign` e o operador spread (`...`). Também introduz práticas para criar cópias rasas de objetos.

- Exemplo:
```javascript
let Tenis = { tamanho: 45, estoque: true };
let link = { link: { a: "a", b: { c: "c" } } };

let mesclar1 = Object.assign(Tenis, link);
let mesclar2 = { ...Tenis, ...link };
console.log(mesclar1);
console.log(mesclar2);
```

### Clonagem de Objetos Rasos e Profundos
- Diferencia a clonagem rasa e profunda de objetos. A clonagem rasa copia apenas o nível superior de propriedades, enquanto a profunda copia todos os níveis. Técnicas como `JSON.parse(JSON.stringify(obj))` e bibliotecas especializadas são mencionadas para clonagem profunda.

- Exemplo:
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
---
## Arrays

### O que é um Array
Um array é uma estrutura de dados que armazena uma coleção de elementos (valores), organizados em índices.
```javascript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas); // ["maçã", "banana", "laranja"]
```

### Índices e Elementos
Os elementos do array são acessados pelos índices, que começam do zero.
```javascript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã"
console.log(frutas.length); // 3
```

### Matrizes Multidimensionais
Arrays podem conter outros arrays, formando matrizes multidimensionais.
```javascript
const matriz = [[1, 2], [3, 4], [5, 6]];
console.log(matriz[1][0]); // 3
```

### Destructuring
Extrai valores de arrays de forma prática.
```javascript
const [a, b] = ["maçã", "banana", "laranja"];
console.log(a); // "maçã"
console.log(b); // "banana"
```

### Spread Operator
Expande os elementos de um array.
```javascript
const frutas = ["maçã", "banana"];
const maisFrutas = [...frutas, "laranja"];
console.log(maisFrutas); // ["maçã", "banana", "laranja"]
```

### Adicionando Elementos
```javascript
const frutas = ["maçã", "banana"];
frutas.push("laranja"); // Adiciona ao final
frutas.unshift("morango"); // Adiciona ao início
console.log(frutas); // ["morango", "maçã", "banana", "laranja"]
```

### Removendo Elementos
```javascript
const frutas = ["maçã", "banana", "laranja"];
frutas.pop(); // Remove o último
frutas.shift(); // Remove o primeiro
console.log(frutas); // ["banana"]
```

### Removendo Elementos 2
```javascript
const frutas = ["maçã", "banana", "laranja"];
const removidos = frutas.splice(1, 1); // Remove a partir do índice 1
console.log(frutas); // ["maçã", "laranja"]
console.log(removidos); // ["banana"]
```

### Ordenando e Revertendo Valores
```javascript
const numeros = [3, 1, 4, 2];
numeros.sort();
console.log(numeros); // [1, 2, 3, 4]
numeros.reverse();
console.log(numeros); // [4, 3, 2, 1]
```

### Loop for, for...in e for...of
```javascript
const frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
for (let index in frutas) {
  console.log(frutas[index]);
}
for (let fruta of frutas) {
  console.log(fruta);
}
```

### Continue e Break em Loops
```javascript
const numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  if (numero === 3) continue;
  if (numero === 5) break;
  console.log(numero);
}
```

### Foreach
```javascript
const frutas = ["maçã", "banana", "laranja"];
frutas.forEach((fruta) => console.log(fruta));
```

### Map
```javascript
const numeros = [1, 2, 3];
const dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6]
```

- **Filter**: Cria um novo array com elementos que atendem à condição.
```javascript
const pedidos = [
  { id: 1, bebida: "Refrigerante" },
  { id: 2, bebida: "Suco" }
];
const apenasRefrigerantes = pedidos.filter(p => p.bebida === "Refrigerante");
console.log(apenasRefrigerantes);
```

- **Find**: Retorna o primeiro elemento que atende à condição.
```javascript
const pedidos = [
  { id: 1, bebida: "Refrigerante" },
  { id: 2, bebida: "Suco" }
];
const pedidoRefrigerante = pedidos.find(p => p.bebida === "Refrigerante");
console.log(pedidoRefrigerante);
```

- **Every**: Verifica se todos os elementos atendem à condição.
```javascript
const pedidos = [
  { id: 1, preco: 10 },
  { id: 2, preco: 20 }
];
const todosCaros = pedidos.every(p => p.preco > 15);
console.log(todosCaros);
```

- **Some**: Verifica se algum elemento atende à condição.
```javascript
const pedidos = [
  { id: 1, preco: 10 },
  { id: 2, preco: 20 }
];
const algumCaro = pedidos.some(p => p.preco > 15);
console.log(algumCaro);
```

- **Reduce**: Condensa os valores em um único resultado.
```javascript
const pedidos = [
  { id: 1, preco: 10 },
  { id: 2, preco: 20 }
];
const total = pedidos.reduce((soma, p) => soma + p.preco, 0);
console.log(total); // 30
