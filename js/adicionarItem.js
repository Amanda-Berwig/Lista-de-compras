import { criarItemdaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault();
    
    if(item.value === ""){
        alert("Por favor, insira um item na lista");
        return;
    }
    
    const itemDaLista = criarItemdaLista(item.value);
    listaDeCompras.appendChild(itemDaLista); 
   
    verificarListaVazia(listaDeCompras);
    item.value = "";
}