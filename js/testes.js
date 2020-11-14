const xhr = new XMLHttpRequest();

xhr.onload = function(){
    if(this.status === 200){
        try{
            const obj = JSON.parse(this.responseText);
        }catch (e){
            console.warn('O aquivo não é um JSON valido.')
        }
    }else{
        console.warn('Erro ao ler o arquivo.')
    }
}

xhr.open('get', '../dados/hemocentros.json')
xhr.send()