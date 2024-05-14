const vettPrimaGen = ["Fearow", "Wigglytuff", "Oddish", "Vileplume", "Alakazam", "Weepinbell", "Graveler", "Gastly", "Kingler", "Hitmonlee", "Weezing", "Horsea", "Tauros", "Ditto", "Moltres"];
const vettSecondaGen = ["Meganium", "Typhlosion", "Feraligatr", "Ledian", "Crobat", "Mareep", "Ampharos", "Politoed", "Sunkern", "Teddiursa", "Ursaring", "Swinub", "Mantine", "Kingdra", "Donphan"];
const vettTerzaGen = ["Swampert", "Seedot", "Taillow", "Slakoth", "Shedinja", "Makuhita", "Nosepass", "Aggron", "Electrike", "Swalot", "Torkoal", "Barboach", "Claydol", "Groudon", "Rayquaza"];
const vettQuartaGen = ["Staravia", "Staraptor", "Luxray", "Combee", "Cherubi", "Ambipom", "Drifblim", "Stunky", "Chatot", "Munchlax", "Drapion", "Leafeon", "Glaceon", "Probopass", "Regigigas"];
const vettQuintaGen = ["Simisage", "Audino", "Tympole", "Throh", "Sewaddle", "Zorua", "Klink", "Tynamo", "Eelekrik", "Fraxure", "Shelmet", "Mienfoo", "Mienshao", "Pawniard", "Volcarona"];
const vettSestaGen = ["Fennekin", "Fletchling", "Pancham", "Honedge", "Doublade", "Spritzee", "Malamar", "Tyrunt", "Hawlucha", "Sliggoo", "Goodra", "Phantum", "Bergmite", "Avalugg", "Volcanion"];
const vettSettimaGen = ["Datrix", "Incineroar", "Toucannon", "Charjabug", "Togedemaru", "Bruxish", "Dhelmise", "Tapu Lele", "Cosmog", "Solgaleo", "Lunala", "Nihilego", "Kartana", "Necrozma", "Stakataka"];
const vettOttavaGen = ["Scorbunny", "Cinderace", "Dottler", "Wooloo", "Chewtle", "Toxel", "Clobbopus", "Hatenna", "Grimmsnarl", "Milcery", "Cufant", "Duraludon", "Regieleki", "Regidrago", "Kleavor"];
const vettNonaGen = ["Crocalor", "Lechonk", "Nymble", "Lokix", "Armarouge", "Tadbulb", "Wattrel", "Brambleghast", "Flittle", "Espathra", "Revavroom", "Farigiraf", "Gholdengo", "Ting-Lu", "Lunaruggente"];
const opzioni = [vettPrimaGen, vettSecondaGen, vettTerzaGen, vettQuartaGen, vettQuintaGen, vettSestaGen, vettSettimaGen, vettOttavaGen, vettNonaGen];  

// DA AL SELECT LE OPTION DELL'ARRAY
const select = document.getElementById("generazioni");
opzioni.forEach((indice) => {
  const option = document.createElement("option");
  option.value = indice;
  option.text = `Array ${indice + 1}`;
});


// CONTROLLA IL NOME E PRENDE POKEMON DAI VETTORI E LI MANDA IN UN'ALTRA PAGINA

function generaStringhe() {
  var nome = document.getElementById("nome").value;
    
  if (nome === "") 
  {
    alert("Inserisci il nome");
    return false;
  }

  const indiceArray = parseInt(select.value, 9);

  const indice1 = Math.floor(Math.random() * opzioni[indiceArray].length);
  let indice2 = Math.floor(Math.random() * opzioni[indiceArray].length);

  while (indice2 === indice1) {
    indice2 = Math.floor(Math.random() * opzioni[indiceArray].length);
  }

  const url = new URL('risultato.html', window.location.href);
  url.searchParams.append('stringa1', opzioni[indiceArray][indice1]);
  url.searchParams.append('stringa2', opzioni[indiceArray][indice2]);

  window.location.href = url.href;
}
