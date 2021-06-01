# Regex

## Links 

#### Plugin para teste de regex no vscode

https://marketplace.visualstudio.com/items?itemName=chrmarti.regex

#### Regex online

https://regex101.com/

>obs: Para testar os exemplos abaixo pode utilizar qualquer nagevador.
>Exemplo: Abra o navegador > f12 > console > e cole o exemplo
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
console.log("-".repeat(60))

console.log("Execuando:", regexNove.exec(texto))
console.log("-".repeat(60))

const regexLetras = /[a-f]/g
console.log('Métodos da string...')

//Extrai as letras de a até f
console.log(texto.match(regexLetras))
console.log("-".repeat(60))

//Mostra a posição do primeiro elemento encontrado pela regex
console.log(texto.search(regexLetras))
console.log("-".repeat(60))

//Altera os valores encontrados pela palavra "Achei"
console.log(texto.replace(regexLetras, 'Achei'))
console.log("-".repeat(60))

//Gera uma lista de dados onde ele remve os items encontrados
console.log(texto.split(regexLetras))
console.log("-".repeat(60))
```

### Como usar expressão regex com uma variável

```js
//Texto completo
const texto = 'O rato roeu a rouba do rei de roma a rainha de raiva roeu a roupa roida do rei de roma. O Rato Roeu...'

//Expressão
const regex = /roeu/gi

//Consulta a palavra casa em todo o texto
console.log(texto.match(regex))

//Conulta as letras se existe uma ocorrência com a_espaço_r no texto
console.log(texto.match(/a r/))
//Ps. quando o resultado não utiliza a flag global ele pode trázer mais informações, como o index e o input, porém quando utilizar a flag global o sistema espera mais do que um resultado (array) então é retornado apenas os valores encontrados.

//Exemplo:
["a r", index: 12, input: "O rato roeu a rouba do rei de roma a rainha de rai…roeu a roupa roida do rei de roma. O Rato Roeu...", groups: undefined]
```

### Cuidados com o tab

```js
//Verificar se o tab está preenchendo os valore com espaços ou tabulação
console.log('	'.match(/\s/g))

//Resultado quando o tab preenche com espaços
[" ", " ", " "]

//Resultado quando é preenchido com tabulação
[ '\t' ]
```



### Ponto é um caractere coringa

Ele é um coringa apenas para uma única posição

```js
const texto = '1,2,3,4,5,6,7,8,9,0'


//Localiza a combinação de 1 e 2 desde que tenha um caractere entre o número 1 e o número 2
console.log(texto.match(/1.2/g))
//["1,2"]

//Não ten valores que fechem com a a expressão 1 qualquer coisa, qualquer coisa 2
console.log(texto.match(/1..2/g))
//null

//Localiza porque a expressão é número 1, qualquer coisa, qualquer coisa, virgula. Nesse caso o QC1 = , e QC2 = 2
//QC = qualquer coisa
console.log(texto.match(/1..,/g))
//["1,2,"]


const notas = '8.3,7.1,8.8,10.0'

// Procura 2 QC depois do outro
console.log(notas.match(/8../g))
// ["8.3", "8.8"]

// Procura valor "ponto" valor ou no caso
// QC "ponto" QC
console.log(notas.match(/.\../g))
//["8.3", "7.1", "8.8", "0.0"]
```


### Desafio 1

Extrair quandos arquivos .mp3 existem na frase.

```js
const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
console.log(texto.match(/\.mp3/g))

//[".mp3", ".mp3", ".mp3", ".mp3"]
// 0: ".mp3"
// 1: ".mp3"
// 2: ".mp3"
// 3: ".mp3"
// length: 4

// \w+ pega um ou mais valores litereis (letras ou números)
console.log(texto.match(/\w+\.mp3/g))

// ["jazz.mp3", "rock.mp3", "podcast.mp3", "blues.mp3"]
```

