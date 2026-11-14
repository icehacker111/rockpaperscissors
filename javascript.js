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
     return answer?answer:Error;
}
function playRound(index){
  let x=getComputerChoice();
  let y=getHumanChoice(index).toLowerCase();
  let signal="true";
   
  //  console.log("y");
          
  switch (y) {
    case "rock":
    //    console.log(y);
        

        if (x==="paper"){
           alert("you Lost!!Computer win");
           computerScore++;}
        else if (x==="rock"){
           alert("you are Even");
           
            break;
           }
        else {
            alert("Congratualtions!!You Win!");
            humanScore++;}
        break;
    case "paper":
        if (x==="scissor"){
           alert("you Lost!!Computer win");
           computerScore++;}
        else if(x==="paper"){
          alert("you are Even");
             
            break;

           }
        else{
            alert("Congratualtions!!You Win!");
            humanScore++;}
        
        break;
    case "scissor":
        if (x==="rock"){
           alert("you Lost!!Computer win");
           computerScore++;}
        
       else if (x==="scissor"){
        alert("you are Even");     
        break;

           }
        
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
    for (let index =1 ; index <6; index++) {
     if(!playRound(index)){
     humanScore=computerScore=-1;

        break;}
    }

    if(humanScore>computerScore){
        alert(`congratulations you Won ${humanScore} to ${computerScore} the Game!!You are as Lucky as Swan!!!`);
    }else if(humanScore== -1){
        alert("try again!");
    }else if(humanScore==computerScore){
        alert("YOU are Even with the computer,please try again");
    }
    else{
        alert(`You Lost!!!${humanScore} to ${computerScore} you should work on your luck mate`);
    }
    humanScore=computerScore=0;
}
console.log("hello");
playGame();