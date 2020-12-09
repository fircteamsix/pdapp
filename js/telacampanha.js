verificarStatus();//Função para verificar se esta logado.

var numCampanhaReg = localStorage.getItem("campanhaReg")

var campanha = localStorage.getItem("campanhaDados"+numCampanhaReg)

var dadosCampanha = campanha.split("|");

console.log(dadosCampanha)
document.getElementById("nomeReceptor").innerText = dadosCampanha[4]
document.getElementById("dataInicio").innerText = dadosCampanha[0]
document.getElementById("dataFim").innerText = dadosCampanha[1]
document.getElementById("tpSangue").innerText = dadosCampanha[5] + dadosCampanha[6]
document.getElementById("nomeHemocentro").innerText = dadosCampanha[2]


var btnDelCampanha = document.getElementById("spanDel")

btnDelCampanha.addEventListener("click", function(){// Botão "Deletar Campanha"
    var totalCampanhas =  localStorage.getItem("campanhaReg")
    deletarCampanha(totalCampanhas)
})

function deletarCampanha(totalCampanhas){
    localStorage.removeItem("campanhaDados"+totalCampanhas)
    localStorage.removeItem("campanha"+totalCampanhas)
    localStorage.setItem("campanhaReg", totalCampanhas-1)

    M.toast({html: 'Campanha deletada com sucesso!'})

    setTimeout(function() {
        window.location.href = "doacao.html";
    }, 3000);
}