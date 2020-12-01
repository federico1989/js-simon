// Un alert espone 5 numeri casuali diversi.
function getRandomNumber(min, max){
  random =  Math.floor(Math.random() * (max + 1 + min)) + min;
  return random;
}
var numberList = [];

while (numberList.length < 5) {
  var numberRandom = getRandomNumber(1, 100);
  if(numberList.indexOf(numberRandom) == -1){
    numberList.push(numberRandom);
  }
  // console.log(numberRandom);
}
// console.log(numberList);

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
var userList = [];

document.getElementById("numeriCasuali").innerHTML = "Ricorda i numeri che vedi: " + numberList;
setTimeout(function(){
  document.getElementById("numeriCasuali").innerHTML = "";
},5000);
setTimeout(domandeUtente, 5010);
function domandeUtente() {
  while (userList.length < 5) {
    var userNumber = Number(prompt("Inserisci il numero che ricordi"));
    if(userList.indexOf(userNumber) == -1){
      userList.push(userNumber);
    }
    // console.log(userNumber);
  }
  // console.log(userList);
  rispostaFinale();
}

// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
function rispostaFinale() {
  var finalList = [];

  for (var i = 0; i < userList.length; i++) {
    if (numberList.indexOf(userList[i]) != -1) {
      finalList.push(userList[i]);
    }
  }
  alert("Hai indovinato " + finalList.length + " numeri e sono " + finalList);
}
