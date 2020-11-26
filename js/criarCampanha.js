verificarStatus();//Função para verificar se esta logado.

var btnSalvar = document.getElementById("btnSalvar");
var arrayCampanhas = [];

var arrayTemp = localStorage["arrayCampanhas"];

for(var i in arrayTemp.length){
  console.log(arrayTemp[i])
}

//Pecorre se existir o "arrayCampanhas" no LocalStorage e preenche o arrayCampannhas desse js.
// if(localStorage["arrayCampanhas"] != null){
//   var arrayTemp = JSON.parse(localStorage["arrayCampanhas"]);
//   for(var i in arrayTemp){
//     arrayCampanhas.push(arrayTemp[i]);
//   }
//   var arrayCampanhas = [localStorage.getItem("arrayCampanhas")];
// }

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
        arrayCampanhas.push({"dataInicio": dataInicio,"dataFim": dataFim,"nomeHemocentro": nomeHemocentro,
                            "nomeHemocentro": nomeReceptor,"radioTbSang": radioTbSang[i].value});// Adcionando itens ao Array
        localStorage["arrayCampanhas"] = arrayCampanhas; //Salvando o Array de "Campanhas"
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