const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

  customBtn.addEventListener("click", function() {
  realFileBtn.click();
  });

  realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
  customTxt.innerHTML = realFileBtn.value.match( /[\/\\]([\w\d\s\.\-\(\)]+)$/ )[1];
  } else {
    customTxt.innerHTML = "Nenhum arquivo selecionado, ainda.";
  }
});

var btnEnviar = document.getElementById("btnEnviar")

btnEnviar.addEventListener("click", function(){// Função do Botão de Enviar o comprovate
    var dataInicial = document.getElementById("dataInicial").value
    var dataFinal = document.getElementById("dataFinal").value
    var localDoacao = document.getElementById("local").value
    var email = localStorage.getItem("logadoCom") // Pega o e-mail do usuario
    if(localStorage.getItem("doacaoReg") != null){
        //Já existe doações
        var numDoacao = Number(localStorage.getItem("doacaoReg"))
        localStorage.setItem("doacao"+(numDoacao+1), email)
        localStorage.setItem("dadosDoacao"+(numDoacao+1), dataInicial+"|"+dataFinal+"|"+localDoacao)
        localStorage.setItem("doacaoReg", numDoacao+1)
        redirecionar()
    }else{
        localStorage.setItem("doacaoReg", 1)
        localStorage.setItem("doacao1", email)
        localStorage.setItem("dadosDoacao1", dataInicial+"|"+dataFinal+"|"+localDoacao)
        redirecionar()
    }
})

function redirecionar(){
    M.toast({html: 'Doação registrada com sucesso!'})

    setTimeout(function() {
        window.location.href = "ver_doacoes.html";
    }, 3000);
}