function aparecerMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open');
    }
}

/*-----Deslize de imagens com a biblioteca---------*/

document.addEventListener('DOMContentLoaded', function() { //faz com que o script rode após o carregamento da tela inteira//

    ScrollReveal().reveal('.boasvindas', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });


    ScrollReveal().reveal('.container-sarinha', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.slider', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    
    ScrollReveal().reveal('.imgSarah', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    
    ScrollReveal().reveal('.txtSarah', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

});


/*-----COOKIES--------*/

document.addEventListener("DOMContentLoaded", function () {
    var cookies = document.getElementById("cookies");

    function aceito() {
        localStorage.setItem("mensagem", "sim");
        cookies.classList.remove("mostrar");
    }

    if (localStorage.getItem("mensagem") !== "sim") {
        cookies.classList.add("mostrar");
    }

    window.aceito = aceito; // Torna a função acessível no botão
});
