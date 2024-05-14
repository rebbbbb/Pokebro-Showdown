// SALVARE IL NOME
function SalvaNome(){
  var nome = document.getElementById("nome").value;
    
  if (nome === "") 
  {
    alert("Inserisci il nome");
    return false;
  }
  else
  {
    alert("Nome salvato con successo");
  }
}

// CHEIDERE CONFERMA PER CAMBIARE PAGINA
function confirmRedirect() {
  if (confirm("Sei sicuro di voler cambiare pagina?")) 
  {
    paginaHome();
  }
}

// REINDIRIZZAZIONE HOME
function paginaHome(){
  window.location.href = "index.html";
}

// VARIABILI COMUNI 
var gameOver = false;
var min = 0;
var max = 700;
var numeri = [10, 25, 50, 75];


// PARTE UTENTE
function attaccaAvversario() {
  if (gameOver) 
  {
    return;
  }

  const numeroCasuale = numeri[Math.floor(Math.random() * numeri.length)];

  var avversarioHP = parseInt(document.getElementById("hp1").textContent);
  if (isNaN(avversarioHP)) 
  {
    avversarioHP = max;
  }

  var tuoHP = parseInt(document.getElementById("hp2").textContent);
  if (isNaN(tuoHP)) 
  {
    tuoHP = max;
  }

  avversarioHP -= numeroCasuale;
  
  if (avversarioHP < min) 
  {
    avversarioHP = min;
  }

  document.getElementById("hp1").textContent = avversarioHP;

  if (avversarioHP === min) 
  {
    gameOver = true;
    alert("Congratulazioni! Hai sconfitto l'avversario.");
    document.querySelector(".buttonAttacca").disabled = true;
  } 
  else {
    setTimeout(attaccaBot, 1000);
  }
}


// PARTE BOT
function attaccaBot() {
  if (gameOver) 
  {
    return;
  }

  var avversarioHP = parseInt(document.getElementById("hp1").textContent);
  if (isNaN(avversarioHP)) 
  {
    avversarioHP = max;
  }

  var tuoHP = parseInt(document.getElementById("hp2").textContent);
  if (isNaN(tuoHP)) 
  {
    tuoHP = max;
  }

  if (tuoHP <= min) 
  {
    return;
  }

  const numeroCasuale = numeri[Math.floor(Math.random() * numeri.length)];

  tuoHP -= numeroCasuale;
  
  if (tuoHP < min) {
    tuoHP = min;
  }

  document.getElementById("hp2").textContent = tuoHP;

  if (tuoHP === min) {
    gameOver = true;
    alert("Hai perso! L'avversario ti ha sconfitto.");
    document.querySelector(".buttonAttacca").disabled = true;
  }
}

// BOTTONE TOP
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
