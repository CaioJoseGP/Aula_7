const phrases = [
    '[ERAM 01:08. AO TERMINAR O SEU TRABALHO, VOCÊ ESTÁ VOLTANDO PRA CASA DEPOIS DE UM LONGO DIA. O SEU REDOR ESTÁ SILENCIOSO, O SOM DOS SEUS PASSOS É ESCONDIDO PELA CHUVA CAINDO SOBRE A CIDADE. O SEU CAMINHO DE SEMPRE ESTÁ INTERDITADO, ENTÃO VOCÊ DECIDE MUDAR SUA ROTINA INDO POR OUTRO LUGAR...]',
    '[VOCÊ ESTÁ SOZINHO NO MEIO DE UMA RUA, QUANDO UM ESTRANHO SE APROXIMA LENTAMENTE]',
    'Olá... Está com fome minha criança?',
    'Uh, claro... estou muito feliz de ouvir isso. *lambe os lábios*',
    'Eu gostaria de te fazer um doce muito especial, só para você, heh. Algo que combina PERFEITAMENTE com o seu paladar. Posso?'
];

let currentPhraseIndex = 0;
let typingTimeout;
var typingSpeed = 90;

function typeText(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = '';
    let index = 0;

    function type() {
        if(index < text.length) {
            element.textContent += text.charAt(index);
            typingTimeout = setTimeout(type, typingSpeed);
            index++;
        }
    }

    type();
}

function SpeedAlt() {
    typingSpeed = 40;
}

function showNextPhrase() {
    clearTimeout(typingTimeout);
    
    if(currentPhraseIndex < phrases.length) {
        typeText('typing-text', phrases[currentPhraseIndex]);

        document.getElementById('next-phrase').style.display = 'inline';

        if(currentPhraseIndex == 2) {
            document.getElementById('next-phrase').textContent = 'Sim';
            document.getElementById('chef').style.display = 'block';

        } else if(currentPhraseIndex == 4) {
            document.getElementById('next-phrase').style.display = 'none';
            document.getElementById('next-page').style.display = 'inline';

        } else {
            document.getElementById('next-phrase').textContent = '>>>';
        }
    }

    currentPhraseIndex++;
}

document.getElementById('next-phrase').addEventListener('click', showNextPhrase);
document.getElementById('speed-button').addEventListener('click', SpeedAlt);

showNextPhrase();