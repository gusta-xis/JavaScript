let contadorCampos = 0;

function adicionarCampo() {
    contadorCampos++;

    let formularioContainer = document.getElementById("formularioContainer");

    // Elementos do formulário
    let divCampo = document.createElement("div");
    divCampo.classList.add("campoFormulario");

    let labelCampo = document.createElement("label");
    labelCampo.textContent = `Campo ${contadorCampos}:`;

    let inputCampo = document.createElement("input");
    inputCampo.type = "text";
    inputCampo.name = `campo ${contadorCampos}`;

    // Adicionar elementos
    divCampo.appendChild(labelCampo);
    divCampo.appendChild(inputCampo);

    formularioContainer.appendChild(divCampo);
}
