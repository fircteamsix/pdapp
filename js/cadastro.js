document.getElementById("btnCadastrar").addEventListener("click", function(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var nome = document.getElementById("nome").value
    var nasc = document.getElementById("nasc").value
    var telefone = document.getElementById("telefone").value
    var uf = document.getElementById("uf").value
    var cidade = document.getElementById("cidade").value
    var resultadocad = document.getElementById("resultadocad")
    if(email != "" && senha != "" && nome != "" && nasc != "" && telefone != "" && uf != "" && cidade != ""){
        localStorage.setItem(document.getElementById("email").value, document.getElementById("senha").value)
        localStorage.setItem("nome/"+email, nome)
        resultadocad.innerText = "Cadastro realizado com sucesso"

        //Pecorrer os radios e gravar o que esta "marcado"
        var radios = document.getElementsByName("group1")
        for(var i=0; i < radios.length; i++){
            if(radios[i].checked){
                localStorage.setItem("tpSang", radios[i].value)
            }
        }
        
        setTimeout(function() {
            window.location.href = "login.html";
        }, 5000);
    }else{
        resultadocad.innerText = "Deve ser preenchido todos os campos"
    }
    
})

function ler(){
    console.log(localStorage.getItem(document.getElementById("email").value))
}
