# Regex

## Plugin para teste de regex no vscode

https://marketplace.visualstudio.com/items?itemName=chrmarti.regex


## Documentação de regex e exemplos


## Flags

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

## Como executar regex em JS

[exemplo](/Exemplos/exemplo1.js)
