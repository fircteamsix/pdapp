var btnSalvar = document.getElementById("btnSalvar");

//Evennto do botão salvar
btnSalvar.addEventListener("click", function(){
  var dataInicio = document.getElementById("dataInicio").value;
  var dataFim = document.getElementById("dataTermino").value;
  var nomeHemocentro = document.getElementById("nomeHemocentro").value;

  if(document.getElementById("myCheck").checked){
    var nomeReceptor = document.getElementById("nomeReceptor").value;
  }else{
    var nomeReceptor = "Nome Logado Teste";//Mudar para o real nome
  }

  localStorage.setItem("dataInicioDocao", dataInicio);
  localStorage.setItem("dataFimDocao", dataFim);
  localStorage.setItem("nomeHemocentro", nomeHemocentro);
  localStorage.setItem("nomeReceptor", nomeReceptor);

  //Pecorrer "RadioButtons"
  var radioTbSang = document.getElementsByName("group1")

  for(var i=0; i < radioTbSang.length; i++){
      if(radioTbSang[i].checked){
          localStorage.setItem("tpSang/"+nomeReceptor, radioTbSang[i].value)
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