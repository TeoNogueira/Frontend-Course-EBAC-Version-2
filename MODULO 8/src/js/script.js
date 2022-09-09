const form = document.getElementById('form-atividade');

const imgAprovado = '<img src="../images/aprovado.png" alt="celebrando" >';
const imgReprovado = '<img src="../images/reprovado.png" alt="triste" >';

const myEmojiA = `<p style="font-size: 30px;">&#129395;</p>`
const myEmojiB = `<p style="font-size: 30px;">&#128532;</p>`
let linhas = ''

form.addEventListener('submit', function(e) {
e.preventDefault();


const inputNomeAtividade = document.getElementById('nome-atividade')
const inputNota = document.getElementById('nota-atividade')


let linha = '<tr>'

linha += `<td>${inputNomeAtividade.value}</td>`
linha += `<td>${inputNota.value}</td>`
linha += `<td>${inputNota.value >= 7 ? myEmojiA : myEmojiB}</td>`
linha += '</tr>'

linhas += linha
const corpoTabela = document.querySelector('tbody');

corpoTabela.innerHTML = linhas

inputNomeAtividade.value = ''
inputNota.value = ''


})