const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('computer_score');
const scoreBoard_div = document.querySelector('.score_board');
const result_div = document.querySelector('.result');
const result_p = document.querySelector('.paragraph');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const elGameBtn = document.querySelector('.clear');



let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function covertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore
    const smallUserWord = 'user '.fontsize(3).sub().fontcolor('#E25043');
    const smallCompWord = 'comp '.fontsize(3).sub().fontcolor('#E25043')
    result_p.innerHTML = (covertToWord(userChoice) + smallUserWord + ' beats ' + covertToWord(computerChoice) + smallCompWord + ' .You win...🔥').fontcolor('#00ff62');
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore
    const smallUserWord = 'user '.fontsize(3).sub().fontcolor('#E25043');
    const smallCompWord = 'comp '.fontsize(3).sub().fontcolor('#E25043')
    result_p.innerHTML = (covertToWord(userChoice) + smallUserWord + ' loses to ' + covertToWord(computerChoice) + smallCompWord + ' .You lost...💩').fontcolor('#E25043');
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 1000);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = 'user '.fontsize(3).sub().fontcolor('#E25043');
    const smallCompWord = 'comp '.fontsize(3).sub().fontcolor('#E25043')
    result_p.innerHTML = (covertToWord(userChoice) + smallUserWord + ' equal ' + covertToWord(computerChoice) + smallCompWord + ' .It`s a draw...🌚').fontcolor('grey');
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('grey-glow')
    }, 1000);
}



function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', (evt) => {
        game('r');
    })
    paper_div.addEventListener('click', (evt) => {
        game('p');
    })
    scissors_div.addEventListener('click', (evt) => {
        game('s');
    })
}
main()