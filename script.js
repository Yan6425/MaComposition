formation("4-4-2");
ajouterCartes("femmes");

function formation(choix){
  let terrain = document.getElementById("terrain");
  let gardien = document.createElement("div");
  gardien.classList.add("joueur");
  gardien.addEventListener("click", placer);
  let ligneGardien = document.createElement("div");
  ligneGardien.id = "gardien";
  ligneGardien.append(gardien);
  terrain.append(ligneGardien);
  for (let i = 0; i < 3; i++){
    let ligne = document.createElement("div");
    ligne.classList.add("ligneJoueurs");
    terrain.appendChild(ligne);
    ligne.appendChild(document.createElement("br"));
    let nombreJoueurs = parseInt(choix.split('-')[i]);
    for (let j = 0; j < nombreJoueurs; j++){
      let joueur = document.createElement("div");
      joueur.classList.add("joueur");
      joueur.addEventListener("click", placer);
      ligne.appendChild(joueur);
    }
    ligne.appendChild(document.createElement("br"));
  }
  terrain.appendChild(document.createElement("br"));
}

function ajouterCartes(genre){
  fetch("joueurs.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("listeJoueurs").innerHTML = "";
    let joueurs = data[genre];
    for (const [key, value] of Object.entries(joueurs)){
      let carte = document.createElement("div");
      carte.classList.add("joueur");
      carte.addEventListener("click", selectionner);
      carte.style.backgroundImage = "url(" + value + ")";
      document.getElementById("listeJoueurs").appendChild(carte);
    }
  })
  .catch(error => console.error('Error fetching JSON:', error));
}

function selectionner(e){
  let choix = document.getElementById("selection");
  if (choix != null) {
    choix.id = "";  
  }
  if (choix != e.currentTarget){
    e.currentTarget.id = "selection";
  }
}

function placer(e){
  let choix = document.getElementById("selection");
  if (choix != null){
    choix.id = "";
    e.currentTarget.replaceWith(choix);
    choix.removeEventListener("click", selectionner);
    choix.addEventListener("click", enlever);
  }
}

function enlever(e){
  e.currentTarget.removeEventListener("click", enlever);
  let clone = e.currentTarget.cloneNode();
  clone.addEventListener("click", selectionner);
  document.getElementById("listeJoueurs").appendChild(clone);
  let carteVierge = document.createElement("div");
  carteVierge.classList.add("joueur");
  carteVierge.addEventListener("click", placer);
  e.currentTarget.replaceWith(carteVierge);
}

function valider(){
  sessionStorage.setItem("terrain", document.getElementById("terrain").innerHTML);
  window.location.href = "termine.html";
}