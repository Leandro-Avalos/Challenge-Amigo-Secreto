let amigos = [];
let nombreAmigo;
let lista;

function agregarAmigo() {
    nombreAmigo = document.querySelector('#amigo').value
    if (nombreAmigo == ''){
        alert('Por favor, ingrese un nombre valido');
    } else {
        document.querySelector('#amigo').value = '';
        actualizarListaDeAmigos();
    }
    console.log(nombreAmigo);
}

function actualizarListaDeAmigos() {
        if (!amigos.includes(nombreAmigo)){
            amigos.push(nombreAmigo);
            lista = document.querySelector('#listaAmigos');
            let nuevoElementoLi = document.createElement('li');
            nuevoElementoLi.innerHTML = nombreAmigo;
            lista.appendChild(nuevoElementoLi);
            console.log(amigos);
        } else {
            alert('Nombre ya ingresado, por favor ingrese otro');
        }
    }

function sortearAmigo(){
    if(amigos.length >= 2 ){
        let amigoSorteado = Math.floor(Math.random()*amigos.length);
        console.log(amigos[amigoSorteado]);
    } else{
        alert(`Ingrese ${amigos.length == 0 ? 'dos nombres' : 'otro nombre'} por favor`)
    }
}