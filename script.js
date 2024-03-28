formation("4-4-2");
ajouterCartes("femmes");

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

function ajouterCartes(genre){
  fetch("joueurs.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("listeJoueurs").innerHTML = "";
    let joueurs = data[genre];
    for (const [key, value] of Object.entries(joueurs)){
      let carte = document.createElement("div");
      carte.classList.add("carte");
      carte.style.backgroundImage = "url(" + value + ")";
      carte.id = key;
      document.getElementById("listeJoueurs").appendChild(carte);
    }
  })
  .catch(error => console.error('Error fetching JSON:', error));
}

function scrollThroughPlayers() {
    let listeJoueurs = document.getElementById("listeJoueurs");
    listeJoueurs.scrollLeft += 50; // Adjust the scroll amount as needed
}
