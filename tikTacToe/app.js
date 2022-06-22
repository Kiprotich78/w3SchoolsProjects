const grid = document.querySelectorAll('.grid');
const playerscore = document.querySelectorAll('.playerscore p span');
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
playerscore[0].textContent = localStorage.getItem('player1_score') ? localStorage.getItem('player1_score') : 0;
playerscore[1].textContent = localStorage.getItem('player2_score') ? localStorage.getItem('player2_score') : 0;
grid.forEach((element, index) => {
    element.addEventListener('click', function (e) {
        if (!element.classList.contains('played')) {
            element.classList.add('played');
        }
        if (element.classList.contains('cross')) {
            player2.push(index);
            let score = checkWin(player2, 'Player 2', parseInt(playerscore[1].textContent));
            playerscore[1].textContent = score;
            localStorage.setItem('player2_score', score);
        }
        else {
            player1.push(index);
            let score = checkWin(player1, "player1", parseInt(playerscore[0].textContent));
            playerscore[0].textContent = score;
            localStorage.setItem('player1_score', score);
        }
        grid.forEach(element => {
            if (!element.classList.contains('played')) {
                element.classList.toggle('cross');
            };
        });

    });
});
let count = 0;
function checkWin(player, name, score) {
    count++;
    btn = document.createElement('button');
    btn.textContent = 'Play Again';
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
            winner.appendChild(btn);
            refresh();
            score++;
        }
    }
    if (count === 9) {
        winner.textContent = 'Draw!';
        winner.classList.add('winner');
        winner.appendChild(btn);
        refresh();
    }

    return score;
};

function refresh() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', function () {
        location.reload();
    });
}
