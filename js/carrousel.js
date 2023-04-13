(function (){
    console.log('Début du carrousel');
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');

    boutcarrousel__ouvrir.addEventListener('mousedown', function () { 
        carrousel.classList.add('carrousel--ouvrir')
        remplir_carrousel();
    });
    carrousel__x.addEventListener('mousedown', function () { 
        carrousel.classList.remove('carrousel--ouvrir')
    });

    function remplir_carrousel() {
        for (const element of galerie__img) {
            let img = document.createElement('img');
            img. setAttribute('src', element.getAttribute('src'));
            carrousel__figure.appendChild(img);
        }
    }
})()