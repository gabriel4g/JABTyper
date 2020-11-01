let textArea = document.querySelector('#typing-field');
let player = document.querySelector('#player')

wordCounter();

let gameTime = document.querySelector('#number-seconds');

// Função que ativa o cronometro para o inicio do jogo.
textArea.onfocus = function() {
    let chronometer = setInterval(function() {
        let timeLeft = gameTime.textContent;
        if(timeLeft <= 0) {
            textArea.setAttribute('disabled', true);
            generateTable();
            clearInterval(chronometer);
        } else {
            timeLeft--;
            gameTime.textContent = timeLeft;
        }
    }, 1000)
}

// Função para pegar texto do textarea
textArea.onkeydown = function() {
    let phrase = textArea.value;
    let numberCharacterEntered = phrase.lenght;

    document.querySelector('#number-characters').textContent = phrase.length;

    numberCharacterEntered = phrase.split(' ').length;
    document.querySelector('#number-words').textContent = numberCharacterEntered;
}

// Função para resetar o jogo
document.querySelector('#reset-btn').onclick = function() {
    textArea.value = '';
    player.value = '';
    textArea.removeAttribute('disabled');
    
    document.querySelector('#number-characters').textContent = '0';
    document.querySelector('#number-words').textContent = '0';
    document.querySelector('#number-seconds').textContent = 20;

    changePhrase.textContent = phrases[Math.floor((0, 19) * Math.random())];
    wordCounter();
}

// Função para comparação dos textos digitados/aleatorios
function compareText () {
    let playerResult = textArea.value.split(' ');
    let result = 0;

    let phrase = document.querySelector('.phrase').textContent;
    let numberOfWords = phrase.split(' ');

    for(let i = 0; i < playerResult.length; i++) {
        if(playerResult[i] == numberOfWords[i]) result++;
    }

    return result;

}

// função para gerar a tabela com os dados
function generateTable() {
    var table = document.getElementById('table');
                var lineNumbers = table.rows.length;
                var line = table.insertRow(lineNumbers);
                var cellOne = line.insertCell(0);
                var cellTwo = line.insertCell(1);   
                var cellThree = line.insertCell(2); 
                cellOne.innerHTML = player.value; 
                cellTwo.innerHTML =  `${compareText()}pps`; 
                cellThree.innerHTML =  `<button onclick='removeLine(this)' class="btn btn-danger">
                <i class="fas fa-trash"></i>
                </button>`;
}

//função para remover linha da tabela
function removeLine(line) {
    var i=line.parentNode.parentNode.rowIndex;
    document.getElementById('table').deleteRow(i);
  }            

