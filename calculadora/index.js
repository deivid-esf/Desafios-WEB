let resulta = document.getElementById("resultado");

let numero = document.getElementById('=');

function atualiza(){
  return resulta.innerHTML = pegaBotao(3).value
}

function pegaBotao (botao) {
  let valorBotao = document.getElementById(botao);
  return valorBotao;
}
function exibe(){
  let valor = pegaBotao(5).value;
  alert(valor);
}

numero.onclick = atualiza;