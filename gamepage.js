// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
var x = document.getElementById("guessFild").value;
// made for correct Guess
if(x == y) {
    aler("CONGRATULATITIOS!!!"+playername+" YOU GUESSED IT RIGTH IN "
          + guess + "GUESS");
    guess=1;    
}else if(x > y) {
    guess++;
    alert("OPPS SORRY!! TRY A SMALLER NUMBER");
}else {

    guess++;
    alert("OPPS SORRY!! TRY A GREATER NUMBER");
}
  
// function for number guessed by user     
function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}