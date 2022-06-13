let displayArea = document.querySelectorAll(".output");
console.log(displayArea);

// Get the element, add a click listener...
document.getElementById("clickArea")
        .addEventListener("click",function(e) {
    // e.target is the clicked element!
  if(options.includes(e.target.alt)&&!gameOver){
  userHasChosen(e.target.alt);
  }
  
  if(e.target.id == "reloadButton") {
    window.location.reload();
  }
  
});


let userChoice, computerChoice, diff;
let max = 2, gameOver = false, winCount = [0,0,0];
let options = ["rock", "paper", "scissors"];
let optionsImg = ['<img src="./assets/img/rock.png" alt="rock">',
'<img src="./assets/img/paper.png" alt="paper">',
'<img src="./assets/img/scissors.png" alt="scissors">'];
let results = ["It's a tie", "You win", "Computer wins"];

const random=(numbers) =>{
    return numbers[Math.floor(Math.random()*numbers.length)];
}

const computerPlay = () =>{
  computerChoice = random([0,1,2]);
}

const userHasChosen = (choice) => {
  switch (choice) {
      case 'rock':
        userChoice = 0;
        break;
      case 'paper':
        userChoice = 1;
        break;
      case 'scissors':
        userChoice = 2;
    }
  computerPlay();
  play();
}

const play = () =>{
  computerPlay();
  whoWins(userChoice,computerChoice);
  display();
  if (winCount[1]>=max||winCount[2]>=max){
    gameOver = true;
      endOfGame();
  }
}

const whoWins =(player1, player2) => {
  diff = player1 - player2;
  (diff<0? diff=results.length+diff:diff=diff);
  winCount[diff]++;
  console.log(winCount);

}

const endOfGame = () =>{
  for (i=0;i<5;i++) {
    displayArea[i].classList.add("d-none");
  }

  if (winCount[0]>=max){
 console.log("you won");
 displayArea[5].innerHTML = "YOU WON!"
}else {
  console.log("'puter won");
  displayArea[5].innerHTML = "COMPUTER WON!"
  }
  

  displayArea[5].innerHTML = displayArea[5].innerHTML +'<input type="submit" id="reloadButton" value="Start Over">';
  console.log(displayArea[5].innerHTML);
}


const display = ()=> {
  for (i=0; i < displayArea[0].children.length;i++){
    displayArea[0].children[i].classList.remove('d-none');
  }
  console.log(displayArea[0].children);
  displayArea[1].innerHTML = optionsImg[userChoice];
  displayArea[2].innerHTML = optionsImg[computerChoice];
  displayArea[3].innerHTML = results[diff];
  displayArea[4].innerHTML = "<div class='col'>you: "+winCount[1]+"</div><div class='col'>computer: "+winCount[2]+"</div>";
  }