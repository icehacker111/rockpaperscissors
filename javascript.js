console.log("Hello world!");
let x=40;
let humanScore=0;
let computerScore=0;
function getComputerChoice(){

   let choise=Math.random();
   if (choise<=(1/3))
      choise="rock";
      else if (choise<=(2/3))
         choise="paper";
         else
            choise="scissor";

    console.log(choise);
    return choise; 
}
function getHumanChoice(index){
    let answer=prompt(`Round ${index} \n enter your choice between rock,paper and scissor!`);
     return answer;
}
function playRound(index){
  let x=getComputerChoice();
  let y=getHumanChoice(index).toLowerCase();
  let signal="true";
    console.log("x");
    console.log("y");
          
  switch (y) {
    case "rock":
        console.log(y);
        
        if (x==="paper"){
           alert("you Lost!!Computer win");
           computerScore++;}
        else{
            alert("Congratualtions!!You Win!");
            humanScore++;}
        break;
    case "paper":
        if (x==="scissor"){
           alert("you Lost!!Computer win");
           computerScore++;}
        else{
            alert("Congratualtions!!You Win!");
            humanScore++;}
        
        break;
    case "scissor":
        if (x==="rock"){
           alert("you Lost!!Computer win");
           computerScore++;}
        else{
            alert("Congratualtions!!You Win!");
            humanScore++;}
        break;
    default:
        alert("something went wrong!");
         signal=false;
        break;
  }

  return signal;
}

  function playGame(){
    let index=1;
    while(playRound(index)){
        index++;
   if(computerScore==5||humanScore==5){
    if(computerScore>humanScore){
    alert(`You Lost to Computer ${computerScore} to ${humanScore}`);}
   
    else{
        alert(`Congratulations!!You Won ${computerScore} to ${humanScore}`);
    }
   index=1;
   if(window.confirm("Would YOu Like to Try Again")){
continue;}

  break;
   }
    }
}
playGame();