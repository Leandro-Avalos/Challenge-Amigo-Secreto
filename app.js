let amigos = [];
let lista;

function agregarAmigo() {
    const input = document.querySelector('#amigo');
    const nombreAmigo = input.value;
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
    } else if (amigos.includes(nombreAmigo)) {
        alert('Nombre ya ingresado, por favor ingrese otro');
        input.value = '';
    } else {
    amigos.push(nombreAmigo);
    input.value = '';
    actualizarListaDeAmigos();
    }
}

function actualizarListaDeAmigos() {
    lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (i=0; i < amigos.length; i++){
        nuevoElementoLi = document.createElement('li');
        nuevoElementoLi.innerHTML = amigos[i];
        lista.appendChild(nuevoElementoLi);
        console.log(i);
    }
    console.log(amigos);
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        const indice = Math.floor(Math.random() * amigos.length);
        lista.innerHTML = '';
        let mensajeResultado = document.querySelector('#resultado');
        mensajeResultado.innerHTML = `El amigo sorteado es ${amigos[indice]}`
    } else {
        alert(`Ingrese ${amigos.length === 0 ? 'dos nombres' : 'otro nombre'} por favor`);
    }
}