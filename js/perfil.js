verificarStatus();//Função para verificar se esta logado.

var email = document.getElementById("email")
var senha = document.getElementById("senha")
var nome = document.getElementById("nome")
var nasc = document.getElementById("nasc")
var telefone = document.getElementById("telefone")
var uf = document.getElementById("uf")
var cidade = document.getElementById("cidade")

var logadoCom = localStorage.getItem("logadoCom")

email.value = localStorage.getItem("logadoCom")
senha.value = localStorage.getItem(logadoCom)
nome.value = localStorage.getItem("nome/"+logadoCom)
nasc.value = localStorage.getItem("nasc/"+logadoCom)
telefone.value = localStorage.getItem("telefone/"+logadoCom)
uf.value = localStorage.getItem("uf/"+logadoCom)
cidade.value = localStorage.getItem("cidade/"+logadoCom)


document.getElementById("btnEditar").addEventListener("click",function(){
    localStorage.setItem("nome/"+logadoCom, nome.value)
    localStorage.setItem("nasc/"+logadoCom, nasc.value)
    localStorage.setItem("telefone/"+logadoCom, telefone.value)
    localStorage.setItem("uf/"+logadoCom, uf.value)
    localStorage.setItem("cidade/"+logadoCom, cidade.value)
    localStorage.setItem(logadoCom, senha.value)

    pecorreTpS(logadoCom)
    pecorreFrh(logadoCom)

    M.toast({html: 'Perfil alterado com sucesso'})
    setTimeout(function() {
        window.location.href = "doacao.html";
    }, 3000);
})

function pecorreTpS(email){
    var radios = document.getElementsByName("group1")
    for(var i=0; i <= radios.length-1; i++){
        if(radios[i].checked){
          localStorage.setItem("tpSang/"+email, radios[i].value)  
        }
        
    }
}

function pecorreFrh(email){
    var frh = document.getElementsByName("frh")
    for(var i=0; i <= frh.length-1; i++){
        if(frh[i].checked){
            localStorage.setItem("frh/"+email, frh[i].value)
        }
    }
}