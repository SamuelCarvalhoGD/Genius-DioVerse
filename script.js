let order = [];
let clickedOrder = [];
let score = 0;

// 0 - azul
// 1 - verde
// 2 - amarelo
// 3 - vermelho

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for( let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); 
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let checkOrder = () => {
    for( let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuacao: ${score}\nVoce acertou! Iniciando proxima sequencia!`);
        nextLevel();
    }
}

let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

let createColorElement = (color) => {
    if(color == 0){
        return blue;
    }else if(color == 1){
        return green;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return red;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () =>{
    alert(`Pontuacao: ${score}!\n Voce perdeu o jogo!\nClique em OK para reiniciar!`);
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;
    nextLevel();
}

blue.onclick = () => click(0);
green.onclick = () => click(1);
yellow.onclick = () => click(2);
red.onclick = () => click(3);

playGame();