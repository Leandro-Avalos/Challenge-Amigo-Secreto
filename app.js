let amigos = [];
let lista;
let nombresYaSorteados = [];

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
        let nuevoElementoLi = document.createElement('li');
        nuevoElementoLi.innerHTML = amigos[i];
        lista.appendChild(nuevoElementoLi);
    }
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        let listaResultados = document.querySelector('#resultado');
        let nuevoElementoLi = document.createElement('li');
        const indice = Math.floor(Math.random() * amigos.length);
        console.log(indice);
        if (nombresYaSorteados.includes(amigos[indice]) && nombresYaSorteados.length < amigos.length){
            return sortearAmigo();
        } else if (nombresYaSorteados.length < amigos.length){
            nombresYaSorteados.push(amigos[indice]);
            lista.innerHTML = '';
            listaResultados.appendChild(nuevoElementoLi);
            nuevoElementoLi.innerHTML = `El amigo sorteado es ${amigos[indice]}`;
        } else {
            alert('Todos los amigos ya fueron sorteados, agregue más amigos para iniciar un nuevo sorteo');
            nombresYaSorteados.length = 0;
            listaResultados.innerHTML = '';
        }
    } else {
        alert(`Ingrese ${amigos.length === 0 ? 'dos nombres' : 'otro nombre'} por favor`);
    }
    console.log(nombresYaSorteados);
}