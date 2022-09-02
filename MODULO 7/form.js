// let nomeBeneficiario = document.getElementById('nome-beneficiario')


// nomeBeneficiario.value

// nomeBeneficiario.value.split('').length > 3

// document.getElementById('btn-depositar').disabled = false
// document.getElementById('btn-depositar').disabled = nomeBeneficiario.value.split(' ').length < 3

// let button = document.getElementById('btn-depositar')

// console.log(button)


function validaNome(nomeCompleto) {

const nomeComoArray = nomeCompleto.split(' ')

return nomeComoArray.length >= 2;

}


const form = document.getElementById('form-deposito')

form.addEventListener('submit', (e) => {

    let formEValido = false;
e.preventDefault()

const nomeBeneficiario = document.getElementById('nome-beneficiario');

const numeroContaBeneficiario = document.getElementById('numero-conta')

const valorDeposito = document.getElementById('valor-deposito');

const msgSuccess = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`



formEValido = validaNome(nomeBeneficiario.value)


    if (formEValido) {

        alert(`${msgSuccess}`)
        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''

    } else {

        alert('O nome não está completo.')
    }

})

console.log(form)


//  ----x--x-x-x-x-x--x------------------  ;//
// let inputs = document.getElementByTagName('input')


// document.getElementByTagName('input')[0].getElementByTagButton('button')

// document.getElementByClassName('container');

// document.querySelector('button')
// document.querySelector('input')
// document.querySelector('input[type=number]')
// document.querySelectorAll('input#numero-conta')
// document.querySelector('h1');
// nomeBeneficiario.value = "Teo Nogueira"
// nomeBeneficiario.type
// nomeBeneficiario.id
// nomeBeneficiario.placeholder
// document.body
// document.head


// let valorDeposito = document.getElementById('valor-deposito')


// console.log(valorDeposito)

