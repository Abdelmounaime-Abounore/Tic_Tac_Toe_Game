//Store names of users in Local Storage

const saveUsernames = () => {
    let username1 = document.getElementById('username1').value;
    let username2 = document.getElementById('username2').value;

    localStorage.setItem('username1', username1);
    localStorage.setItem('username2', username2);
}

// Read names of useers from Local Storage

document.addEventListener('DOMContentLoaded', function()    {
    let username1 = localStorage.getItem('username1');
    let username2 = localStorage.getItem('username2');

    document.getElementById("username1").textContent = username1;
    document.getElementById("username2").textContent = username2;
});

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

function openPopup() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
  }

function reloadGame(){
    location.reload();
}

let character = 'X';
let title = document.querySelector('.title');
let modalTitle = document.querySelector('.modal-title');


const game = (id) => {
    var element = document.getElementById(id);

    if(character === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X';
        character = 'O';
        title.innerHTML = 'The turn of ' + localStorage.getItem('username2');;
    } else if (character === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        character = 'X';
        title.innerHTML = "The turn of " + localStorage.getItem('username1');;
    }

    squares[id] = element.innerHTML;
    
    for(let i = 0; i < squares.length; i++){
        if(i % 20 <= 15 // Ensure that we don't check across different rows 
            && squares[i] != undefined 
            && squares[i] === squares[i + 1] 
            && squares[i + 1] === squares[i + 2] 
            && squares[i + 2] === squares[i + 3] 
            && squares[i + 3] === squares[i + 4]
        ) {    
            for(let j = i; j < i + 5; j++){
                let winnerSquare = document.getElementById(j); 
                winnerSquare.style.backgroundColor = "green";
                winnerSquare.style.color = "white";
            }

            modalTitle.innerHTML = "The Player " +  character + " Won";

            openPopup();
            
            if(character == "X"){
                character = "O";
            }else if (character == "O"){
                character = "X";
            }

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

                modalTitle.innerHTML ="The Player " + character + " Won";
                
                openPopup();
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

                if(character == "X"){
                    character = "O";
                }else if (character == "O"){
                    character = "X";
                }
    
                modalTitle.innerHTML = "The Player " +  character + " Won";

                openPopup();
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

                if(character == "X"){
                    character = "O";
                }else if (character == "O"){
                    character = "X";
                }
    
                modalTitle.innerHTML = "The Player " +  character + " Won";
                
                openPopup();
            }
    }
}