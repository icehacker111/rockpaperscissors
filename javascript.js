console.log("Hello world!");
let x=40;
let humanScore=0;
let computerScore=0;
const buttons=document.querySelectorAll("button");
const round=document.querySelector("#Round");
const cptScore=document.querySelector("#cptScore");
const hmnScore=document.querySelector("#hmnScore");
const pcEmoji=document.querySelector("#pcEmoji");
const hmnEmoji=document.querySelector("#hmnEmoji");
const pcValue=document.querySelector("#pcValue");
const hmnValue=document.querySelector("#hmnValue");
 let answer="hio";
let signal="true"; 
  

function getComputerChoice(){
 
   let choise=Math.random();
   if (choise<=(1/3)){
      choise="ROCK";
     pcEmoji.textContent=emoji(choise);
     pcValue.textContent=choise;}
   else if (choise<=(2/3)){
         choise="PAPER";
         pcEmoji.textContent=emoji(choise);
     pcValue.textContent=choise;
   }
    else{
        choise="SCISSOR";
    pcEmoji.textContent=emoji(choise);
      pcValue.textContent=choise;
    }
    console.log(choise);
    return choise; 
}
function playRound(index,answer){
  

     hmnValue.textContent=answer;
    hmnEmoji.textContent=emoji(answer);
    
    round.textContent=`Round ${index}`;
    
  let y=answer;
   
    let x=getComputerChoice();
    console.log("x");
    console.log("y");
    if(y.toUpperCase()==x){
            alert("YOU ARE EVEN");
             }
    else{
  switch (y) {
    case "ROCK":
        console.log(y);
        
        if (x==="PAPER"){
           alert("you Lost!!Computer win");
           computerScore++;}
        else{
            alert("Congratualtions!!You Win!");
            humanScore++;}
        break;
    case "PAPER":
        if (x==="SCISSOR"){
           alert("you Lost!!Computer win");
           computerScore++;}
        else{
            alert("Congratualtions!!You Win!");
            humanScore++;}
        
        break;
    case "SCISSOR":
        if (x==="ROCK"){
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
  }}
  cptScore.textContent=`${computerScore}`;
  hmnScore.textContent=`${humanScore}`;

  return signal;
}

  function playGame(){
    let index=1;
    


  buttons.forEach((button)=> button.addEventListener("click",function (event){console.log(event.target.id);
  if(signal){
  signal=playRound(index,event.target.id);
  index++;
   if(computerScore==5||humanScore==5){
    signal=false;
    setTimeout(() => {
  if(computerScore>humanScore){
    alert(`You Lost to Computer ${computerScore} to ${humanScore}`);

    }
   
    else{
        alert(`Congratulations!!You Won ${computerScore} to ${humanScore}`);
      
      }
  
   if(window.confirm("Would YOu Like to Try Again")){

      signal=true;
      index=1;
    computerScore=humanScore=0;
  
  cptScore.textContent=`0`;
  hmnScore.textContent=`0`;
  round.textContent=` `;
   

  }else{
cptScore.textContent=`0`;
  hmnScore.textContent=`0`;
  round.textContent=` `;
  

  }
  
     
}, 50);
    
   
    }}
    else{
      if(window.confirm("Would YOu Like to Try Again")){

      signal=true;
      index=1;
    computerScore=humanScore=0;
      }}
  


}
));}


 
    

function emoji(choise){
 let emo=`?`;
    if (choise==="ROCK")
     emo=`✊🏼`;
   else if (choise==="PAPER")
     emo=`🫳`;
   else
       emo=`✌️`;
     
    console.log(emo);
    return emo; 

}
  
   
playGame();