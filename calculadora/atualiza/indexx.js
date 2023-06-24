let textoEntrada = document.getElementById("entrada");
let textoSaida = document.getElementById("texto");
let butao = document.getElementById('1')
function atualiza(){
  textoSaida.innerHTML = textoEntrada.value
}
function exibe(){
  let valor = parseInt(butao.value)
  alert(valor + 1)
}
butao.onclick = exibe;
setInterval(atualiza, 1000); 