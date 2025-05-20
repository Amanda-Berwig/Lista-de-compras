import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";
import { verificarListaVazia } from "./js/verificarListaVazia.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);