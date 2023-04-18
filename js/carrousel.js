(function (){
    console.log('Début du carrousel');
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let carrousel__form = document.querySelector('.carrousel__form');
    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');
    let ancien_index = 1;

    boutcarrousel__ouvrir.addEventListener('mousedown', function () { 
        carrousel.classList.add('carrousel--ouvrir')
        remplir_carrousel();
    });
    carrousel__x.addEventListener('mousedown', function () { 
        carrousel.classList.remove('carrousel--ouvrir')
    });

    function remplir_carrousel() {
        for (const element of galerie__img) {
            creation_img_carrousel(element);
            creation_radio_carrousel();
        }
    }

    function creation_img_carrousel(element) {
        let img = document.createElement('img');
        img.classList.add('carrousel__img');
        img.setAttribute('src', element.getAttribute('src'));
        carrousel__figure.appendChild(img);
    }

    let position = 0;

    function creation_radio_carrousel() {
        let rad = document.createElement('input');
        rad.setAttribute('type', 'radio');
        rad.setAttribute('name', 'carrousel__rad');
        rad.classList.add('carrousel__rad');
        rad.dataset.index = position;
        position += 1;
        carrousel__form.appendChild(rad);
        rad.addEventListener('mousedown', function(){
            index = this.dataset.index;
            if (ancien_index != -1) {
                //carrousel__figure.children[ancien_index].style.opacity = 0;
                carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer');
            }
            //carrousel__figure.children[this.dataset.index].style.opacity = 1;
            carrousel__figure.children[this.dataset.index].classList.add('carrousel__img--activer')
            ancien_index = index;
        })
    }
})()