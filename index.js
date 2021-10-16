let sequence = [];
let playerSequence = []
let score = 1250;

const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const green = document.getElementById('green');
const scoreBoard = document.getElementById('score');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    sequence[sequence.length] = colorOrder;
    playerSequence = [];

    for(let i in sequence) {
    let elementColor = createColorElement(sequence[i]);
        lightColor(elementColor, Number(i) + 1);
    } 
}

let lightColor = (item, number) => {
    number = number * 500;
    setTimeout(() => {
        item.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        item.classList.remove('selected');
    }, number );
}

let checkOrder = () => {
    for(let i in playerSequence) {
        if(playerSequence[i] != sequence[i]) {
            gameOver();
            break;
        }
    }
    if(playerSequence.length == sequence.length) {
      //  alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
      scoreBoard.innerHTML = "Acertou!!!"
      setTimeout(() => {  scoreBoard.innerHTML = score }, 1500)  
      setTimeout(() => {  nextLevel(); }, 2000)  
     
    }
}

let click = (color) => {
    playerSequence[playerSequence.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    scoreBoard.innerHTML = score
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score - 1}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    sequence = [];
    playerSequence = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();


