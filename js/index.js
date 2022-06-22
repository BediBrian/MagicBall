
let answers = [
    "Com certeza",
    "Definitivamente",
    "Sem dúvida",
    "Vai com tudo",
    "Pode apostar",
    "A meu ver, sim",
    "Provavelmente",
    "Sim",
    "Sinais apontam que sim",
    "Há uma boa chance",
    "Não entendi, tente novamente",
    "Pergunte novamente mais tarde",
    "Melhor não te dizer agora",
    "Não é possível prever agora",
    "Concentre-se e pergunte novamente",
    "Não conte com isso",
    "Minha resposta é não",
    "Minhas fontes dizem não",
    "Não vai ser dessa vez",
    "Muito duvidoso",
];

function getAnswer() {

    const result = Math.round(Math.random()*19);

    let resp = answers[result];

    let insideResp = document.getElementById('resp');
    insideResp.innerHTML = resp;
    insideResp.style.fontSize = '1.8rem';
    insideResp.style.fontWeight = '600';
    insideResp.style.textAlign = 'center';

    restart();
}

function restart() { 
    setTimeout(function(){ location.reload(); }, 1300);
};




