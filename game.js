var number=6;
var guess=prompt("Guess a number");

if(Number(guess)>number){
    alert("too high!");
}
else if(Number(guess)<number){
    alert("too low!");
}else{
    alert("You guessed it!!");
}