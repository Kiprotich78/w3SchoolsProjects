const grid = document.querySelectorAll('.grid');
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let player1 = [];
let player2 = [];


grid.forEach((element, index) => {
    element.addEventListener('click', function (e) {
        if (!element.classList.contains('played')) {
            element.classList.add('played');
        }
        if (element.classList.contains('cross')) {
            player2.push(index);
            checkWin(player2, 'Player 2');
        }
        else {
            player1.push(index);
            checkWin(player1, 'Player 1');
        }
        grid.forEach(element => {
            if (!element.classList.contains('played')) {
                element.classList.toggle('cross');
            };
        });

    });
});

function checkWin(player, name) {
    const winner = document.querySelector('section');
    for (let i = 0; i < wins.length; i++) {
        let win = wins[i];
        let winCount = 0;
        for (let j = 0; j < win.length; j++) {
            if (player.includes(win[j])) {
                winCount++;
            }
        }
        if (winCount === 3) {
            winner.textContent = `${name} wins!`;
            winner.classList.add('winner');
        }
    }
};
