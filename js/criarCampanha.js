verificarStatus();//Função para verificar se esta logado.

var btnSalvar = document.getElementById("btnSalvar");

//Evennto do botão salvar
btnSalvar.addEventListener("click", function(){
  var dataInicio = document.getElementById("dataInicio").value;
  var dataFim = document.getElementById("dataTermino").value;
  var nomeUnidade = document.getElementById("nomeUnidade").value;
  var nomeCampanha = document.getElementById("nomeCampanha").value;

  if(localStorage.getItem("campanhaReg") != null){
    // JÁ EXISTE CAMPANHA REGISTRADA //

    var numCampanha = Number(localStorage.getItem("campanhaReg"))
    localStorage.setItem("campanha"+(numCampanha+1), localStorage.getItem("logadoCom"))

    if(document.getElementById("myCheck").checked){ //Switch de Doação especifica
      var nomeReceptor = document.getElementById("nomeReceptor").value;
      
      localStorage.setItem("campanhaDados"+(numCampanha+1), dataInicio+"|"+dataFim+"|"+nomeUnidade+"|"+nomeCampanha+"|"+nomeReceptor+"|"+tpSang()+"|"+tpFrh())
              
    }else{
      //Dados do usuario
      var email = localStorage.getItem("logadoCom")
      var nome = localStorage.getItem("nome/"+email)
      var valorTpS = localStorage.getItem("tpSang/"+email)
      var valorfrh = localStorage.getItem("frh/"+email)
      localStorage.setItem("campanhaDados"+(numCampanha+1), dataInicio+"|"+dataFim+"|"+nomeUnidade+"|"+nomeCampanha+"|"+nome+"|"+valorTpS+"|"+valorfrh)
    }
    
    localStorage.setItem("campanhaReg", numCampanha+1)

  }else{
    // NÂO EXISTE CAMPANHA REGISTRADA //
  
    localStorage.setItem("campanhaReg", 1)
    localStorage.setItem("campanha1", localStorage.getItem("logadoCom"))

    if(document.getElementById("myCheck").checked){ //Switch de Doação especifica
      var nomeReceptor = document.getElementById("nomeReceptor").value;

      localStorage.setItem("campanhaDados1", dataInicio+"|"+dataFim+"|"+nomeUnidade+"|"+nomeCampanha+"|"+nomeReceptor+"|"+tpSang()+"|"+tpFrh())
      
    }else{
      //Dados do usuario
      var email = localStorage.getItem("logadoCom")
      var nome = localStorage.getItem("nome/"+email)
      var valorTpS = localStorage.getItem("tpSang/"+email)
      var valorfrh = localStorage.getItem("frh/"+email)
      localStorage.setItem("campanhaDados1", dataInicio+"|"+dataFim+"|"+nomeUnidade+"|"+nomeCampanha+"|"+nome+"|"+valorTpS+"|"+valorfrh)
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

function tpSang(email){
  var radioTbSang = document.getElementsByName("group1");
  for(var i=0; i <= radioTbSang.length-1; i++){
    if(radioTbSang[i].checked){
      return radioTbSang[i].value
    }
  }
}

function tpFrh(email){
  var radioFRH = document.getElementsByName("group2");
  for(var i=0; i <= radioFRH.length-1; i++){
    if(radioFRH[i].checked){
      return radioFRH[i].value
    }
  }
}
