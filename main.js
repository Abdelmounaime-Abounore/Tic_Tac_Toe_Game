let squares = new Array(400);

const board = document.querySelector(".board");

for(let i = 0; i < 400; i++){

    const square = document.createElement('div');
    square.classList.add('square');
    square.id = `${i}`;

    square.onclick = function() {
        game(this.id);
    };

    board.appendChild(square);
}

// const winner = (id) => {
//     let squares = new Array(400);
//     var element = document.getElementById(`square-${id}`);
//     console.log(element);
// }

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

    squares[id] = element.innerHTML;
    for(let i = 0; i < squares.length; i++){
        if(squares[i] == squares[i+1] 
            && squares[i+1] == squares[i+2] 
            && squares[i+2] == squares[i+3] 
            && squares[i+3] == squares[i+4]
            && squares[i] != undefined) {
            
            for(let j = i; j < i + 5; j++){
                let winnerSquare = document.getElementById(j); 
                winnerSquare.style.backgroundColor = "green";
                winnerSquare.style.color = "white";
            }
        }
    }
}