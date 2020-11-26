verificarStatus();//Função para verificar se esta logado.

var btnSalvar = document.getElementById("btnSalvar");
var arrayCampanhas = [];

var arrayTemp = localStorage["arrayCampanhas"];

for(var i in arrayTemp.length){
  console.log(arrayTemp[i])
}

//Evennto do botão salvar
btnSalvar.addEventListener("click", function(){
  var dataInicio = document.getElementById("dataInicio").value;
  var dataFim = document.getElementById("dataTermino").value;
  var nomeHemocentro = document.getElementById("nomeHemocentro").value;

  if(document.getElementById("myCheck").checked){
    var nomeReceptor = document.getElementById("nomeReceptor").value;
  }else{
    var emailLogado = localStorage.getItem("logadoCom");
    var nomeReceptor = localStorage.getItem("nome/"+emailLogado);
  }
  
  //Pecorrer "RadioButtons"
  var radioTbSang = document.getElementsByName("group1");

  for(var i=0; i < radioTbSang.length; i++){
      if(radioTbSang[i].checked){
        //radioTbSang[i].value
      }
  }
  window.location.href = "tela_de_campanha.html";
  
})

//Evento da checkbox
function myFunction() {
var chekButton = document.getElementById("myCheck");
var textP = document.getElementById("text");

if (chekButton.checked == true){
  textP.style.display = "block";
} else {
  textP.style.display = "none";
}
}