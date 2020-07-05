/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("www." + pronoun, adj, noun, ext);
};
let pronoun = ["la", "el", "las", "los"];
let adj = ["gran", "super", "enormes", "pequeno"];
let noun = ["lugar", "academia", "agujero", "granja"];
let ext = [".com", ".es", ".net", ".org"];

function dominio(pronoun, adj, noun, ext) {
  for (i = 0; i < pronoun.length; i++) {
    for (j = 0; j < adj.length; j++) {
      for (k = 0; k < noun.length; k++) {
        for (l = 0; l < ext.length; l++) {
          let frase = pronoun[i].concat(adj[j], noun[k], ext[l]);
        }
      }
    }
  }

  document.getElementById("web");
  return console.log(frase);
}
