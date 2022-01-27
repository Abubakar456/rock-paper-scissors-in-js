function rpsGame(yourChoice){    
    let humanChoice = yourChoice.id;
    let boatChoice = getBoatChoice();

    let winner = getWinner(humanChoice, boatChoice); 
    console.log(humanChoice + ' '+boatChoice);
    console.log(winner.message);
    console.log(winner.color);
    removeAllImages();
    announceWinner(humanChoice, boatChoice)
    document.getElementById('user-title').style.visibility = 'visible';


}

function getBoatChoice(){
    let options = ['rock','paper','scissors'];
    let selectedOptionIndex = getRandomNumber();
    return options[selectedOptionIndex];
    // return ['rock', 'Paper', 'scissors'][getRandomNumber()];
    // return ['rock', 'Paper', 'scissors'][Math.floor(Math.random()*3)]; // no need for getRandomNumber()
}

function getRandomNumber(){
    return Math.floor(Math.random()*3);
}

function getWinner(human, boat)
{
    if((human === 'rock' && boat === 'rock') || (human === 'paper' && boat === 'paper') || (human === 'scissors' && boat === 'scissors'))
    {  
        return {message:'You Tied!',
    color:'cornflowerblue',};

    }
    else if((human === 'rock' && boat === 'scissors') || (human === 'paper' && boat === 'rock') || (human === 'scissors' && boat === 'paper')){
        return {message:'You Win!',
    color:'green',};
    }
    else{
        return {message:'You Lost!',
        color:'red',};
    }
    
}

function removeAllImages(){
    let images = document.getElementsByTagName('img');
    let numberOfImages = images.length; 
    for(let i= 0 ; i < numberOfImages; i++){
        images[0].remove();console.log(images);
    }
}

 function announceWinner(human, boat){
    let humanChoice = document.createElement('img'); 
    let boatChoice = document.createElement('img'); 
    let resultContainer = document.createElement('div');
    let resultTextNode = document.createElement('div');
    let playAgainButton = document.createElement('button'); 
 
    humanChoice.setAttribute('id', human);
    boatChoice.setAttribute('id', boat);
    humanChoice.setAttribute('src', getImageSource(human));
    boatChoice.setAttribute('src', getImageSource(boat));
    humanChoice.setAttribute('height','150px');
    boatChoice.setAttribute('height','150px');
    humanChoice.setAttribute('width','150px');
    boatChoice.setAttribute('width','150px');

    let winner = getWinner(human, boat)
    resultContainer.setAttribute("class", 'result-container');
    resultContainer.setAttribute("style", 'color:' + winner.color + ';font-size: 60px;');
    resultContainer.innerText = winner.message;
    playAgainButton.setAttribute('id', 'play-again-btn');
    
    playAgainButton.innerText = 'Play Again';
    playAgainButton.setAttribute('onclick', 'reloadPage()');
    resultContainer.appendChild(playAgainButton);

    let imgContainer = document.getElementById('img-container');
    imgContainer.appendChild(humanChoice);
    imgContainer.appendChild(resultContainer);
    imgContainer.appendChild(boatChoice);


}
function getImageSource(id){
    if(id === 'rock')
    {
        return './images/rock.webp';
    }
    else if(id === 'paper'){
        return './images/paper.jpg';
    }
    else{
        return './images/scissors.png';
    }
    // alternative to conditionals
    // let imagesCollection = {
    //     'rock':document.getElementById('rock').src,
    //     'paper':document.getElementById('paper').src,
    //     'scissors':document.getElementById('scissors').src,
    // }
    // return imagesCollection[id];
}

function reloadPage(){
    window.location.reload();
}