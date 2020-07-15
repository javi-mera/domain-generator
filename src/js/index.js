/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["la", "el", "las", "los"];
  let adj = ["gran", "super", "enormes", "pequeno"];
  let noun = ["lugar", "academia", "agujero", "granja"];
  let ext = [".com", ".es", ".net", ".org"];

  document.getElementById("web").innerHTML = dominio(pronoun, adj, noun, ext);
};

function dominio(pronoun, adj, noun, ext) {
  let frase = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          frase.push(
            "<p>" + pronoun[i].concat(adj[j], noun[k], ext[l]) + "</p>"
          );
        }
      }
    }
  }
  return frase;
}
