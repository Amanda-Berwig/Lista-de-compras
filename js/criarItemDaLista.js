
import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";

import { verificarListaComprados } from "./verificarListaComprados.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemdaLista(item) {
    // Criando uma variavel e atribuindo a ela a criação de um elemento li
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div"); // Criando um container que vai ficar dentro do item da lista
    containerItemLista.classList.add("lista-item-container"); // Adicionando uma classe ao container

    const containerNomeDoItem = document.createElement("div");
   /////////////////inicio da criação do container checkbox 
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox"; //para criar um input do tipo checkbox
    checkboxInput.classList.add("input-checkbox"); //para adicionar uma classe ao checkbox
    checkboxInput.id = "checkbox-" + contador++; //para adicionar um id ao checkboxe o contador que vai aumentar
    
    const checkboxLabel = document.createElement("label"); 
    checkboxLabel.setAttribute("for", checkboxInput.id); //para associar o label ao input pelo for
   
    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox")
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado")
        const itemTitulo= evento.currentTarget.closest("li").querySelector("#item-titulo");
        
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista)   

        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista)
        }
        verificarListaComprados(listaComprados)
    })


    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado"); //para adicionar uma classe ao checkbox customizado
    
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    /////////////fim da criação do container checkbox??
    
    const nomeDoItem = document.createElement("p"); //para criar um elemento de paragrafo
    nomeDoItem.id = "item-titulo"
    nomeDoItem.innerText = item; //para colocar o valor do input dentro do <paragrafo>, o que vai ser digitado pelo usuario dentro do input
    containerNomeDoItem.appendChild(nomeDoItem); //para colocar o paragrafo dentro do container      

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "./assets/delete.svg";
    imagemRemover.alt = "Remover item da lista";

    botaoRemover.addEventListener("click", function() {
        excluirItem(itemDaLista);
    })

    botaoRemover.appendChild(imagemRemover); //colocar a imagem dentro do botao,l vai ser um elemento filho
    containerBotoes.appendChild(botaoRemover); //colocar o botao dentro do container de botoes

    // const containerBotoes = document.createElement("div");
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "./assets/edit.svg";
    imagemEditar.alt = "Editar item da lista";

    botaoEditar.addEventListener("click", function() {
        editarItem(itemDaLista);
    })

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

   containerItemLista.appendChild(containerNomeDoItem); //para colocar o container dentro do containerItemLista
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
        itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
    itemData.classList.add("texto-data");

    //pra colocar a div dentro do li
    itemDaLista.appendChild(containerItemLista); //colocamos um elemento(div) como filho do li
    itemDaLista.appendChild(itemData);
    
    return itemDaLista
}