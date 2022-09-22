$(document).ready(function() {


$('header button').click(function() {

 $('form').slideDown();

})


$('#botao-cancelar').click(function() {

    $('form').slideUp();

})


$('form').on('submit', function(e) {
    e.preventDefault();

    const addressNewImg = $('#address-new-img').val()
    const newItem = $('<li style="display: none;"></li>')
    // const classOverlay = 'overlay-img-link'

    $(`<img src="${addressNewImg}" />`).appendTo(newItem)

    $(`<div class="overlay-img-link">
    <a href="${addressNewImg}" target="_blank" title="Ver imagem em tamanho real">
    Ver imagem em tamanho real
    </a>
    </div>`).appendTo(newItem)

    $(newItem).appendTo('ul')
    $(newItem).fadeIn(1000);
    $('#address-new-img').val('')

})


})


