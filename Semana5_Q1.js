function creatList(quantidadeLi, texto) {
  console.log("criando lista");

  for (var i = 0; i < quantidadeLi; i++) {
    var hall = document.createElement("li");
    var hallzin = document.createTextNode(texto + " " + i);
    hall.appendChild(hallzin);

    document.getElementById("myList").appendChild(hall);
  }
}

creatList(23, "Eu apanhei do github nessa atividade, mas foi a ultima vez.");