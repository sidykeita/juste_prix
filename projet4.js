// sélection des éléments

let formulaire = document.querySelector('#formulaire');
let error = document.querySelector('small');
let input = document.querySelector('input');

formulaire.style.textAlign = 'center';
formulaire.style.paddingTop = '2em';

// cacher l'erreur

error.style.display = 'none';

// générer un nombre aléatoire entre 0 et 1000

let nombreAleatoire = Math.floor(Math.random() * Math.floor(1001));

let coups = 0;

let nombreChoisi;

// vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup',() => {

    if(isNaN(input.value))
    {
        error.style.display = 'block';
    }else{
        error.style.display = 'none';
    }
});

// agit à l'envoi du formulaire

formulaire.addEventListener('submit',(e) => {
    // permet de ne rien envoyer
    e.preventDefault();
    if(isNaN(input.value) || input.value == '')
    {
        input.style.borderColor = 'red';
        input.value = '';

    }else{
        coups++;
        input.style.borderColor = 'gray';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }

})

function verifier(nombre)
{
    let div = document.createElement('div');

    if(nombre < nombreAleatoire)
    {
        div.innerHTML = '#'+coups+'('+nombre+') c\'est plus !';
        div.className = "instruction plus"; 
    }
    else if(nombre > nombreAleatoire)
    {
        div.innerHTML = '#'+coups+'('+nombre+') c\'est moins !';
        div.className = "instruction moins"; 
    }
    else{
        div.innerHTML = '#'+coups+'('+nombre+') felicitation !';
        div.className = "instruction fini"; 
        // rend inactif le formulaire
        input.disabled = true;
        
    }
    // agit sur la page html
    document.querySelector('#instructions').prepend(div);
}