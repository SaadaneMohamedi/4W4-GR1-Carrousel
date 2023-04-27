(function (){
    console.log('Début du carrousel');
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let carrousel__fleche_droite = document.querySelector('.carrousel__fleche_droite');
    let carrousel__fleche_gauche = document.querySelector('.carrousel__fleche_gauche');
    let carrousel__figure = document.querySelector('.carrousel__figure');
    let carrousel__form = document.querySelector('.carrousel__form');
    let galerie = document.querySelector('.galerie');
    let galerie__img = galerie.querySelectorAll('img');
    let ancien_index = -1;
    let position = 0;
    let index = 0;

    boutcarrousel__ouvrir.addEventListener('mousedown', function () { 
        carrousel.classList.add('carrousel--ouvrir')
        remplir_carrousel();
    });
    carrousel__x.addEventListener('mousedown', function () { 
        carrousel.classList.remove('carrousel--ouvrir')
    });

    carrousel__fleche_droite.addEventListener('mousedown', function () {
        index = index + 1;
        afficher_image(index);
        console.log(index);
        if (index >= 6) {
            index = 0;
        }
    })

    carrousel__fleche_gauche.addEventListener('mousedown', function () {
        index = index - 1;
        afficher_image(index);
        console.log(index);
        if (index <= 0) {
            index = 6;
        }
    })

    function remplir_carrousel() {
        for (const element of galerie__img) {
            element.dataset.index = position;
            element.addEventListener('mousedown', function () {
                index = this.dataset.index;
                afficher_image(index);
            });
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
            afficher_image(index);
        });
    }

    function afficher_image(index) {
        if (ancien_index != -1) {
            //carrousel__figure.children[ancien_index].style.opacity = 0;
            carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer');
            //carrousel__form.children[ancien_index].checked;
        }
        //carrousel__figure.children[this.dataset.index].style.opacity = 1;
        carrousel__figure.children[index].classList.add('carrousel__img--activer')
        ancien_index = index;
    }

    //carrousel.classList.contain('carrousel--activer');
})()