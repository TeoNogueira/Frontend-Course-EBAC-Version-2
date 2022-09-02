
const fd = document.getElementById('f-d')


fd.addEventListener('submit', function(e) {

    e.preventDefault();

    
const valorA = document.getElementById('a').value
const valorB= document.getElementById('b').value
    
if(valorB > valorA) {

    alert('Valor válido, você poderá financiar!')
}
else {

    alert('Valor Inválido')
}
   

}
)

