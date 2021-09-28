function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  console.log(filmeFavorito);

  if (filmeFavorito.toLowerCase().endsWith(".jpg")) {
     listarFilmesNaTela(filmeFavorito);
   } else {
     console.error("Endereço de filme inválido");
   }

   document.getElementById("filme").value = "";
}

 function listarFilmesNaTela(filme) {
   var elementoFilmeFavorito = "<img src=" + filme + ">";
   var listaFilmes = document.getElementById("listaFilmes");

   listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeFavorito;
 }
