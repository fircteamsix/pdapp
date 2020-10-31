document.getElementById("btnEntrar").addEventListener("click", function(){
    var usuario = document.getElementById("username").value
    var senha = document.getElementById("password").value
    if(usuario != "" && senha != ""){
        if(localStorage.getItem(usuario) != null){
            if(Number(localStorage.getItem(usuario)) === Number(senha)){
                M.toast({html: 'Logado com sucesso, sendo redirecionado...'})
                setTimeout(function() {
                    window.location.href = "listahemo.html";
                }, 5000);
            }
        }
    }
})
