//Botão "ADD", Cadastro de Campanha
document.getElementById("btnCadCampanha").addEventListener("click", function(){
    window.location.href = "criar_campanha.html"
})

var resCampanha = document.getElementById("resCampanha")
var numCampanhaReg = localStorage.getItem("campanhaReg")

if(numCampanhaReg !=null){
    for(var i=1; i <= numCampanhaReg; i++){
        var campanha = localStorage.getItem("campanhaDados"+i)
        var dadosCampanha = campanha.split("|");
        resCampanha.innerHTML += '<li class="collection-item avatar"><i class="material-icons circle">language</i><span class="title">'+dadosCampanha[3]+'</span><p>'+dadosCampanha[4]+'<br>'+dadosCampanha[0]+' até '+dadosCampanha[1]+'</p></li>'
    }
}
