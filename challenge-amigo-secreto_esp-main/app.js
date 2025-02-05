let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Indicar un nombre válido");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    listaAmigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert(" Se debe agregar al menos un amigo para sortear.");
        return;
    }
    
    let indiceGanador = Math.floor(Math.random() * listaAmigos.length);
    let ganador = listaAmigos[indiceGanador];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El ganador del sorteo es: <strong>${ganador}</strong> </li>`;
}
