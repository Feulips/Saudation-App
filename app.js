const saudacao = document.getElementById('saudacao');
const frase = document.getElementById('frase');
const icone = document.getElementById('icone');

const frasesManha = [
    "Levante-se, herói! Cada novo amanhecer é o primeiro episódio de uma nova temporada da sua vida! 🌅💫",
    "Uma nova manhã chegou! Que ela seja cheia de luz, alegria e momentos incríveis, como se você estivesse entrando em um episódio cheio de magia e aventuras! 💫"
];
const frasesTarde = [
    "Que sua tarde seja cheia de energia positiva, como o poder do protagonista antes da batalha final! 💥✨",
    "Que sua tarde seja como um arco emocionante de anime: cheia de descobertas, encontros inesperados e momentos que fazem o coração sorrir! 💖✨"
];
const frasesNoite = [
    "Que a sua noite seja tão tranquila quanto uma vila iluminada pela lua, e que seus sonhos sejam aventuras épicas! 🌌💫",
    "Boa noite! Que sua noite seja serena como um céu estrelado de anime, e que seus sonhos te levem a aventuras incríveis que só existem na imaginação! 🌌💫"
];

function atualizarSaudacao() {
    const hoje = new Date();
    const hora = hoje.getHours();

    let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;

    if (hora >= 5 && hora < 12) {
        msgSaudacao = 'Bom dia';
        imgFundo = "url(images/wall-sun.jpg)";
        imgIcone = "images/sol.png";
        frasesDoMomento = frasesManha;
    } else if (hora >= 12 && hora < 18) {
        msgSaudacao = 'Boa tarde';
        imgFundo = "url(images/wall-cup.jpg)";
        imgIcone = "images/cup.png";
        frasesDoMomento = frasesTarde;
    } else {
        msgSaudacao = 'Boa noite';
        imgFundo = "url(images/wall-moon.jpeg)";
        imgIcone = "images/moon.png";
        frasesDoMomento = frasesNoite;
    }

    saudacao.textContent = msgSaudacao;
    document.body.style.backgroundImage = imgFundo;
    icone.src = imgIcone; 
    const randomIndex = Math.floor(Math.random() * frasesDoMomento.length);
    frase.textContent = frasesDoMomento[randomIndex];
}

atualizarSaudacao();
setInterval(atualizarSaudacao, 8000);
