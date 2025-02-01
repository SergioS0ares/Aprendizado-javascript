# 📘 Aprendizado em JavaScript

Este repositório contém meus estudos e experimentos em JavaScript, incluindo conceitos básicos, boas práticas e exemplos práticos.

# Sumário

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
29. [Destructuring em Arrays](#destructuring-em-arrays)
30. [Spread Operator](#spread-operator)
31. [Adicionando Elementos](#adicionando-elementos)
32. [Removendo Elementos](#removendo-elementos)
33. [Removendo Elementos 2](#removendo-elementos-2)
34. [Ordenando e Revertendo Valores](#ordenando-e-revertendo-valores)
35. [Loop for, for...in e for...of](#loop-for-forin-e-forof)
36. [Continue e Break em Loops](#continue-e-break-em-loops)
37. [Foreach](#foreach)
38. [Map](#map)
39. [Filter](#filter)
40. [Find](#find)
41. [Every](#every)
42. [Some](#some)
43. [Reduce](#reduce)
44. [DOM](#dom)

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

## O que é um Array

- Um array é uma estrutura de dados utilizada para armazenar múltiplos valores em uma única variável. Ele é muito útil para organizar coleções de itens relacionados.

- Exemplo:

```javascript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas);
```



### Índices e Elementos

- Os elementos de um array são indexados a partir do zero, permitindo acesso individual a cada item pelo índice.

- Exemplo:

```javascript
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã"
console.log(frutas.length); // 3
```


### Matrizes Multidimensionais

- Matrizes multidimensionais são arrays que contêm outros arrays, criando estruturas em várias camadas.

- Exemplo:

```javascript
const matriz = [[1, 2], [3, 4]];
console.log(matriz[0][1]); // 2
```

### Destructuring

- O destructuring permite extrair valores de um array e atribuí-los diretamente a variáveis.

- Exemplo:

```javascript
const frutas = ["maçã", "banana", "laranja"];
const [primeira, segunda] = frutas;
console.log(primeira); // "maçã"
```

### Spread Operator

- O operador spread (`...`) é usado para expandir elementos de um array.

- Exemplo:

```javascript
const frutas = ["maçã", "banana"];
const todasFrutas = [...frutas, "laranja"];
console.log(todasFrutas);
```

### Adicionando Elementos

- Podemos adicionar elementos ao início ou ao final de um array utilizando os métodos `unshift` e `push`, respectivamente.

- Exemplo:

```javascript
const frutas = ["maçã", "banana"];
frutas.push("laranja");
frutas.unshift("morango");
console.log(frutas);
```

### Removendo Elementos

- Os métodos `shift` e `pop` removem o primeiro e o último elemento de um array, respectivamente.

- Exemplo:

```javascript
const frutas = ["maçã", "banana", "laranja"];
frutas.pop();
frutas.shift();
console.log(frutas);
```

### Removendo Elementos 2

- Podemos usar os métodos `slice` e `splice` para remover elementos de um array em posições específicas.

- Exemplo:

```javascript
const frutas = ["maçã", "banana", "laranja"];
const novasFrutas = frutas.slice(1);
frutas.splice(1, 1);
console.log(novasFrutas);
console.log(frutas);
```

### Ordenando e Revertendo Valores

- O método `sort` ordena os elementos de um array, enquanto o `reverse` inverte a ordem dos elementos.

- Exemplo:

```javascript
const numeros = [3, 1, 4];
numeros.sort();
numeros.reverse();
console.log(numeros);
```

### Loop for, for...in e for...of

- Os loops permitem percorrer arrays de diferentes maneiras.

- Exemplo:

```javascript
const frutas = ["maçã", "banana"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (let indice in frutas) {
  console.log(indice);
}

for (let fruta of frutas) {
  console.log(fruta);
}
```

### Continue e Break em Loops

- Os comandos `continue` e `break` controlam o fluxo de execução dentro de loops.

- Exemplo:

```javascript
const numeros = [1, 2, 3, 4];

for (let numero of numeros) {
  if (numero === 2) continue;
  if (numero === 4) break;
  console.log(numero);
}
```

### Foreach

- O método `forEach` executa uma função para cada elemento do array.

- Exemplo:

```javascript
const frutas = ["maçã", "banana"];
frutas.forEach((fruta) => console.log(fruta));
```

### Map

- O método `map` cria um novo array aplicando uma função a cada elemento do original.

- Exemplo:

```javascript
const numeros = [1, 2, 3];
const dobro = numeros.map((numero) => numero * 2);
console.log(dobro);
```

### Filter: Cria um novo array com elementos que atendem à condição.

- O método `filter` é usado para criar um novo array contendo apenas os elementos que satisfazem uma condição específica.

- Exemplo:

```javascript
const numeros = [1, 2, 3, 4];
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);
```

### Find: Retorna o primeiro elemento que atende à condição.

- O método `find` retorna o primeiro elemento no array que satisfaz a condição fornecida.

- Exemplo:

```javascript
const numeros = [1, 2, 3, 4];
const primeiroPar = numeros.find((numero) => numero % 2 === 0);
console.log(primeiroPar);
```

### Every: Verifica se todos os elementos atendem à condição.

- O método `every` verifica se todos os elementos de um array satisfazem a condição fornecida.

- Exemplo:

```javascript
const numeros = [2, 4, 6];
const todosPares = numeros.every((numero) => numero % 2 === 0);
console.log(todosPares);
```

### Some: Verifica se algum elemento atende à condição.

- O método `some` verifica se pelo menos um elemento do array satisfaz a condição fornecida.

- Exemplo:

```javascript
const numeros = [1, 3, 5, 6];
const temPar = numeros.some((numero) => numero % 2 === 0);
console.log(temPar);
```

### Reduce: Condensa os valores em um único resultado.

- O método `reduce` aplica uma função acumuladora para reduzir o array a um único valor.

- Exemplo:

```javascript
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((total, numero) => total + numero, 0);
console.log(soma);
```
---

## DOM

O **DOM (Document Object Model)** é a interface que permite interação com documentos HTML e XML através de JavaScript. Ele transforma a estrutura do documento em um modelo de árvore, onde cada elemento é um nó acessível e manipulável.

### O que é e para que serve o DOM

- O DOM permite que o JavaScript manipule elementos da página, alterando textos, estilos e até removendo ou adicionando elementos dinâmicos.

```javascript
"use strict";

const h1 = document.querySelector("h1");
h1.style.background = "red"; // Altera o fundo do h1 para vermelho
```

### Selecionando Elementos com querySelector

- O `querySelector` retorna o primeiro elemento que corresponde ao seletor especificado.

```javascript
const h1 = document.querySelector("h1"); // Seleciona a primeira tag h1
const classP = document.querySelector(".paragrafo"); // Seleciona o primeiro elemento com a classe "paragrafo"
const idP = document.querySelector("#paragrafo"); // Seleciona o elemento com o ID "paragrafo"

console.log(h1, classP, idP);
```

### Selecionando Elementos com querySelectorAll

- O `querySelectorAll` retorna uma **NodeList** com todos os elementos que correspondem ao seletor.

```javascript
const p = document.querySelectorAll("p");

p.forEach((element, index) => {
  element.style.color = "white";
  element.style.padding = "20px";

  if (index === 0) element.style.background = "blue";
  if (index === 1) element.style.background = "red";
});
```

### Selecionando Elementos com getElementById

- O `getElementById` retorna um único elemento com base no seu ID.

```javascript
const p = document.getElementById("paragrafo");
console.log(p);
```

### Selecionando Elementos com getElementsByClassName

- O `getElementsByClassName` retorna uma **HTMLCollection** com todos os elementos que possuem a classe especificada.

```javascript
const p = document.getElementsByClassName("paragrafo");
console.log(p);

for (let element of p) {
  console.log(element);
}
```

### Selecionando Elementos com getElementsByTagName

- O `getElementsByTagName` retorna uma **HTMLCollection** de todos os elementos com a tag especificada.

```javascript
const p = document.getElementsByTagName("p");
console.log(p);

for (let element of p) {
  console.log(element);
}
```
