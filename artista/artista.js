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

    ScrollReveal().reveal('.txtSarah', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.imgSarah', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.imgSarah2', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

});