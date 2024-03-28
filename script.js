formation("4-4-2");

function formation(choix){
  let terrain = document.getElementById("terrain");
  terrain.innerHTML = "<div id='gardien'><div class='joueur'></div></div>";
  for (let i = 0; i < 3; i++){
    let ligne = document.createElement("div");
    ligne.classList.add("ligneJoueurs");
    terrain.appendChild(ligne);
    ligne.appendChild(document.createElement("br"));
    let nombreJoueurs = parseInt(choix.split('-')[i]);
    for (let j = 0; j < nombreJoueurs; j++){
      let joueur = document.createElement("div");
      joueur.classList.add("joueur");
      ligne.appendChild(joueur);
    }
    ligne.appendChild(document.createElement("br"));
  }
  terrain.appendChild(document.createElement("br"));
}
