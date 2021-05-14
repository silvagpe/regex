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