// PRENDE I VALORI DEI PARAMETRI DA "GENERA-STRINGHE" DELL'URL
const url = new URL(window.location.href);
const stringa1 = url.searchParams.get('stringa1');
const stringa2 = url.searchParams.get('stringa2');

// MOSTRA I POKEMON NELLA PAGINA HTML
document.getElementById('stringa1').innerHTML = stringa1 + "<br/> <img src='./img/pokemon/"+ stringa1 + ".png' style='height: 300px; width:'auto; position: 'relative;/>";
document.getElementById('stringa2').innerHTML = stringa2 + "<br/> <img src='./img/pokemon/"+ stringa2 + ".png' style='height: 300px; width:'auto;/>";
