# Regex

## Links 

#### Plugin para teste de regex no vscode

https://marketplace.visualstudio.com/items?itemName=chrmarti.regex

#### Regex online

https://regex101.com/

---

## Princípais conceitos de regex

<br>

### Flags

[exemplo](/Flags/flags.js)
```
g - global
i - ignore case
m - multi line
```

>Sintaxe: 
```/<expressão>/<flag>```

```js

//Pocura pela letra C ou as letras ab (apenas a primeira ocorrência)
texto.match(/C|ab/)

//Procura pela letra c ou ab ignorando se é maiúscula ou minúscula (apenas a primeira ocorrência)
texto.match(/c|ab/i)

//Procura em todo o texto todas as combinações para ab ou letra c ignorando o case (toda as ocorrências porque tem a flag g)
texto.match(/ab|c/gi)
```

### Como executar regex em JS

[exemplo](/Exemplos/exemplo1.js)

```js
//Valors de pesquisa
const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

//Expressão - Localizar o valor 9
const regexNove = RegExp('9')
console.log('Métodos da RegExp...')

console.log("Testando regexNove:", regexNove.test(texto))
console.log("Execuando:", regexNove.exec(texto))

console.log("-".repeat(60))
const regexLetras = /[a-f]/g
console.log('Métodos da string...')

//Extrai as letras de a até f
console.log(texto.match(regexLetras))

//Mostra a posição do primeiro elemento encontrado pela regex
console.log(texto.search(regexLetras))

//Altera os valores encontrados pela palavra "Achei"
console.log(texto.replace(regexLetras, 'Achei'))

//Gera uma lista de dados onde ele remve os items encontrados
console.log(texto.split(regexLetras))
```

### Como usar expressão regex com uma variável

```js
//Texto completo
const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

//Expressão
const regex = /casa/gi

//Consulta a palavra casa em todo o texto
console.log(texto.match(regex))

//Conulta as letras a
console.log(texto.match(/a b/))
```
