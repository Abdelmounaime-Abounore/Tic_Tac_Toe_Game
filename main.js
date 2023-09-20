let character = 'X';
let title = document.querySelector('.title');

const game = (id) => {
    var element = document.getElementById(id);

    if(character === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X';
        character = 'O';
        title.innerHTML = 'The turn of O';
    } else if (character === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        character = 'X';
        title.innerHTML = "The turn of X";
    }
}

const board = document.querySelector(".board");

for(let i = 0; i < 400; i++){

    const square = document.createElement('div');
    square.classList.add('square');
    square.id = `square-${i}`;

    square.onclick = function() {
        game(this.id);
    };

    board.appendChild(square);
}