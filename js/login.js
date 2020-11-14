document.getElementById("btnEntrar").addEventListener("click", function(){
    var usuario = document.getElementById("username").value
    var senha = document.getElementById("password").value
    if(usuario != "" && senha != ""){
        if(localStorage.getItem(usuario) != null){
            if(Number(localStorage.getItem(usuario)) === Number(senha)){
                M.toast({html: 'Logado com sucesso, sendo redirecionado...'})
                localStorage.setItem("logadoCom", usuario)
                localStorage.setItem("status", "LOGADO")
                setTimeout(function() {
                    window.location.href = "doacao.html";
                }, 5000);
            }else{
                M.toast({html: 'E-mail ou Senha invalidos'})
            }
        }else{
            M.toast({html: 'E-mail ou Senha invalidos'})
        }
    }
})
