// Hello world

// alert('Hello')

// console.log('Hello')

// // console.error()
// // console.info()
// // console.table()

// document.write('hello')

// document.body.innerHTML = 'Hello'


/*
var >> Global acesso

let >> deixa ser alterado

const >> nunca altera "o nome já diz tudo" constante

*/
let acc = 43

 let ok = 124 + acc
 let ok2 = '32'
 let ok3 = false

// .length -1
// .slice()
// .split()

// colocar no final de um array .push()
// colocar no começo de um array .unshift()
// deletar no começo de um array .shift()
// deletar no final de um array .pop()

// Jeitos de declarar um tipo array : Array('a', 'b', 'c'), 
// Jeitos de declarar um tipo array : let array = ['a', 'b', 'c']

const array = Array('123', 32)

console.log(typeof ok)
console.log(typeof ok2)
console.log(typeof ok3)
console.log(ok + ', Total, e ' + `${ok2}!`)


console.log(typeof array[0])



let listName = ['Teo ', 'Elia ', 'Irla ']


for(let i = 0; i < listName.length; i++) {


    console.log(`O nome é: ${listName}\n`)
}

// conditions: 

//operadores lógicos:

/*
&& <<< e

|| <<< 

! <<< não


let temNome
exemplo: if(!temNome) <<< leitura: senão tiver nome.

*/


// ATRIBUIÇAO: 


/*
Atribuição	x = y	x = y
Atribuição de adição	x += y	x = x + y
Atribuição de subtração	x -= y	x = x - y
Atribuição de multiplicação	x *= y	x = x * y
Atribuição de divisão	x /= y	x = x / y
Atribuição de resto	x %= y	x = x % y
Atribuição exponencial	x **= y	x = x ** y
Atribuição bit-a-bit por deslocamento á esquerda	x <<= y	x = x << y
Atribuição bit-a-bit por deslocamento á direita	x >>= y	x = x >> y
Atribuiçãode bit-a-bit deslocamento á direita não assinado	x >>>= y	x = x >>> y
Atribuição AND bit-a-bit	x &= y	x = x & y
Atribuição XOR bit-a-bit	x ^= y	x = x ^ y
Atribuição OR bit-a-bit	x |= y	x = x | y

*/


/*
COMPARAÇÂO: 
Igual (==)
Não igual (!=)	
=== Totalmente igual

!== Totalmente diferente

Maior que (>)
Maior que ou igual (>=)
Menor que (<)
Menor que ou igual (<=)

*/


// Aritmeticos :

/*
Módulo (%)
Incremento (++)
Decremento (--)
Negação (-)
Adição (+)


Operador de exponenciação (**)

*/ 


// Funções Algumas Maneiras de Declarar:


// Função comum:

function add() {}
add()
// Função anônima:

function() {

}

// Arrow function:

const test = () => {
console.log('Test')

}

test()

// IIFE FUNCTION:

var result = (function () {
    var nome = "Teo";
    return nome;
})()

result;

// parseInt() parseStr()