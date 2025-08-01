let amigos = [];
let listaNombres;
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
    listaNombres = document.querySelector('#listaAmigos');
    listaNombres.innerHTML = '';
    for (i=0; i < amigos.length; i++){
        crearElementoLi('#listaAmigos' ,amigos[i])
    }
}

function crearElementoLi(selectorLista, texto){
    let nuevoElementoLi = document.createElement('li');
    let lista = document.querySelector(selectorLista);
    nuevoElementoLi.innerHTML = texto;
    lista.appendChild(nuevoElementoLi);
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        const indice = Math.floor(Math.random() * amigos.length);
        console.log(indice);
        if (nombresYaSorteados.includes(amigos[indice]) && nombresYaSorteados.length < amigos.length){
            return sortearAmigo();
        } else if (nombresYaSorteados.length < amigos.length){
            nombresYaSorteados.push(amigos[indice]);
            listaNombres.innerHTML = '';
            crearElementoLi('#resultado', `El amigo sorteado es ${amigos[indice]}`)
        } else {
            alert('Todos los amigos ya fueron sorteados, agregue más amigos para iniciar un nuevo sorteo');
            nombresYaSorteados.length = 0;
            document.querySelector('#resultado').innerHTML = '';
        }
    } else {
        alert(`Ingrese ${amigos.length === 0 ? 'dos nombres' : 'otro nombre'} por favor`);
    }
    console.log(nombresYaSorteados);
}