$(document).ready(function(e) {

     

    $('#carousel-imagens').slick({
        autoplay: true,
    });
    
    $('.menu-hamb').click(function() {
    
        $('nav').slideToggle()
    
    })
    // let maskMob = smartphone ? '(00) 00000-0000' : '(00) 0000-0000';
    $('#telefone').mask('(00) 0000-0000');
    /* ex: mask('00/00/0000', {
        //placeholder: 'dia/mês/ano'
    
    }); */
    // 
    
    //https://igorescobar.github.io/jQuery-Mask-Plugin/ jquery mask plugin IGORESCOBAR
    
    $('form').validate({
    
     
        rules:{ 
            nome: {
            required: true,
        },
            email: {
            required: true,
            email: true
        },
            telefone: {
            required: true,
        },
            mensagem: {
            required: true,
        },
            veicInteresse: {
            required: false,
        },
    },
    messages: {
        nome: 'Por favor, insira o seu nome'
    
    },
    submitHandler: function(form) {
    
        console.log(form)
    },
    
    invalidHandler: function(e, validador) {
    
        let camposIncorretos = validador.numberOfInvalids();
    
        // console.log(camposIncorretos)
    
        if(camposIncorretos) {
    
            alert(`Existem ${camposIncorretos} campos incorretos!`)
        }
    }
    
    // Este plugin não trabalha com ID's, mas com o nome do campo (inputs).
    });
    
    $('.lista-veic button').click(function() {
    
        const destiny = $('#contato');
    
    const nameAuto = $(this).parent().find('h1').text()
    
    $('#veic-interesse').val(nameAuto)
    
        $('html').animate({
    
            scrollTop: destiny.offset().top
        }, 1000);
    })
    })
    // slick lib website in github
    //Jqueryvalidation.org
    // console.log('test')