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

### Exemplo de pesquisa de caracteres simples

```js
const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

//Faz um split dos valores pelo caracter vincula gerando um array como retorno
console.log(texto.split(regexVirgula))

//Result:
[ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]


// Localiza a primeira ocorrência do caracter vingula, se usar a flag global, localiza todas as ocorrencias
console.log(texto.match(regexVirgula))

//Result:
[ ',',
  index: 1,
  input: '1,2,3,4,5,6,a.b c!d?e',
  groups: undefined ]


//Consulta globalmente todas as vinculas que existem no texto e gera um array como resultado
console.log(texto.match(/,/g))

//Result:
[ ',', ',', ',', ',', ',', ',' ]

//Consulta se existe uma ocorrência com a letra A maiúscula
console.log(texto.match(/A/g))

//Result:
null

//Consulta todas as ocorrências com a letra A ignorado o case
console.log(texto.match(/A/gi))

//Result
[ 'a' ]


//Consulta todas as ocorrências com o número 2
console.log(texto.match(/2/g))

//Result:
[ '2' ]


//Consulta se existe uma ocorrência com as letras 'b c!d' e devolve o valor as seguintes informações
console.log(texto.match(/b c!d/))

//Result:
[ 'b c!d',
  index: 14,
  input: '1,2,3,4,5,6,a.b c!d?e',
  groups: undefined ]

```


## Meta caracteres

<br>

### Representantes 

| Caracter      | Nome              |Explicação                         |
| ------------- |-------------------|-----------------------------------|
| .             | Ponto             | Um caractere qualquer             |
| []            | Conjunto          | Conjunto de caracteres permitidos |
| [^]           | Conjunto negado   | Conjunto de caracteres proíbidos  |
| [^]           | Conjunto negado   | Conjunto de caracteres proíbidos  |


<br>

### Quantificadores


| Caracter      | Nome              |Explicação                     |
| --------------|-------------------|-------------------------------|
| ?             | Opcional          | Zero ou um                    |
| *             | Asterisco         | Zero ou mais                  |
| +             | Mais              | Um ou mais                    |
| {n, m}        | Chaves            | De n até m                    |

<br>

### Âncoras


| Caracter      | Nome              |Explicação                         |
| ------------- |-------------------|-----------------------------------|
| ^             | Circunflexo       | Início de linha                   |
| $             | Cifrão            | Fim de linha                      |
| \b            | Borda             | Início ou fim de palavra          |

<br>

### Ouros Metacaracteres


| Caracter      | Nome              |Explicação                         |
| ------------- |-------------------|-----------------------------------|
| \             | Escape            | Uso de metacaracteres como literal|
| |             | Ou                | Operação "or"                     |
| ( )           | Grupo             | Define um grupo                   |
| \1 \9         | Retrovisor        | Resgata grupos já definidos       |

<br>

#### Exemplos

```js
//Exemplos de metacaracteres
// . ? * + - ^ $ | [ ] { } ( ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

//Gera um array separando os valores em dois grupos, divididos pelo literal . (ponto)
//Em outras palavras remove o ponto e gera um array com dois resultados
const regexPonto = /\./g
console.log(texto.split(regexPonto))

//Result:
[ '1,2,3,4,5,6,a', 'b c!d?e' ]


//Exemplo usando o ESCAPE:
//Gera um array removendo os caracteres especiais: ",", ".", "?", "!" e " " (espaço)
//Nesse exemplo utiliza-se o | (pipe) como condição "ou".
//Caracteres simples não precisan preceder com o caracter de escape "\" no exemplo abaixo os caracteres que precisam de escape são  "\." e "\?" porque são metacaracteres. Utilizando o escape a tornamos ele um caractere simples, literal.
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))

//Result:
[ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e' ]

```