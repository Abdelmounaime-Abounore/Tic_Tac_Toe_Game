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
            if(character == "X"){
                character = "O";
            }else if (character == "O"){
                character = "X";
            }

            title.innerHTML = character + " Won";
        } else if(squares[i] == squares[i+20] 
            && squares[i+20] == squares[i+40] 
            && squares[i+40] == squares[i+60] 
            && squares[i+60] == squares[i+80]
            && squares[i] != undefined) {

                for(let j = i; j <= i + 80; j += 20){
                    let winnerSquare = document.getElementById(j); 
                    winnerSquare.style.backgroundColor = "green";
                    winnerSquare.style.color = "white";
                }
                if(character == "X"){
                    character = "O";
                }else if (character == "O"){
                    character = "X";
                }

                title.innerHTML = character + " Won";
            } 
            else if ((squares[i] == squares[i+19] 
                && squares[i+19] == squares[i+38] 
                && squares[i+38] == squares[i+57] 
                && squares[i+57] == squares[i+76]
                && squares[i] != undefined)) {

                    for(let j = i; j <= i + 76; j += 19 ){
                        let winnerSquare = document.getElementById(j); 
                        winnerSquare.style.backgroundColor = "green";
                        winnerSquare.style.color = "white";
                    }
            } else if ((squares[i] == squares[i + 21] 
                && squares[i + 21] == squares[i + 42] 
                && squares[i + 42] == squares[i + 63] 
                && squares[i + 63] == squares[i + 84]
                && squares[i] != undefined)){

                    for(let j = i; j <= i + 84; j += 21){
                        let winnerSquare = document.getElementById(j);
                        winnerSquare.style.backgroundColor = "green";
                        winnerSquare.style.color = "white";
                    }
            }
    }
}