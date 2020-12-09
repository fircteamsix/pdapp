document.getElementById("btnCadastrar").addEventListener("click", function(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var nome = document.getElementById("nome").value
    var nasc = document.getElementById("nasc").value
    var telefone = document.getElementById("telefone").value
    var uf = document.getElementById("uf").value
    var cidade = document.getElementById("cidade").value

    if(email != "" && senha != "" && nome != "" && nasc != "" && telefone != "" && uf != "" && cidade != ""){
        localStorage.setItem(document.getElementById("email").value, document.getElementById("senha").value)
        localStorage.setItem("nome/"+email, nome)
        localStorage.setItem("nasc/"+email, nasc)
        localStorage.setItem("telefone/"+email, telefone)
        localStorage.setItem("uf/"+email, uf)
        localStorage.setItem("cidade/"+email, cidade)

        pecorreTpS(email)
        pecorreFrh(email)

        M.toast({html: 'Cadastro realizado com sucesso'})
        setTimeout(function() {
            window.location.href = "login.html";
        }, 5000);
    }else{
        M.toast({html: 'Deve ser preenchido todos os campos!'})
    }
    
})

function ler(){
    console.log(localStorage.getItem(document.getElementById("email").value))
}

function pecorreTpS(email){
    var radios = document.getElementsByName("group1")
    for(var i=0; i <= radios.length-1; i++){
        localStorage.setItem("tpSang/"+email, radios[i].value)
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