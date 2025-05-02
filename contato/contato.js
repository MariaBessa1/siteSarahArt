function aparecerMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open');
    }
}


document.addEventListener('DOMContentLoaded', function() { //faz com que o script rode após o carregamento da tela inteira//

    ScrollReveal().reveal('.contatosLinks', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.txtContato', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.Base', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

});