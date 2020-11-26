//Botão: "Entrar"

if(document.getElementById("btnEntrar") != null){
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
}


//Botão: "Esqueci a Senha"
if(document.getElementById("btnEsqueci") != null){
    document.getElementById("btnEsqueci").addEventListener("click", function(){
        if(document.getElementById("email").value != ""){
            M.toast({html: 'Link de recuperação da senha foi enviado ao seu e-mail.'})
            setTimeout(function() {
                window.location.href = "login.html";
            }, 5000);
        }
        
    })
}
