//Variaveis para pegar os elementos
var listaSelect = document.getElementById("listaUF");
var info = document.getElementById("info");
var btnBusca = document.getElementById("botaobusca");
var cardInformacoes = document.getElementById("cardInformacoes");
var cardIndique = document.getElementById("cardIndique");

const xhr = new XMLHttpRequest(); //Protocolo Http

function buscarHemo(){ //Função de busca. 
  xhr.onload = function(){
    if(this.status === 200){
      try{
        cardInformacoes.style.display = "block"; //Muda o style para ser exibido
        info.innerText = "" // Limpa o campo para não duplicar as informações de buscas anteriores

        const obj = JSON.parse(this.responseText) //Converte em json valido

        for(i in obj.hemocentros){ //Pecorre o json 
          if(obj.hemocentros[i].unidade.toLowerCase() == document.getElementById("search-txt").value.toLowerCase()){
            info.innerHTML += '<a href="'+obj.hemocentros[i].link+'">'+obj.hemocentros[i].unidade.toUpperCase()+'</a><br>'
          }
          cardIndique.style.display = "block"
        }
      }catch (e){
        console.warn('O aquivo não é um JSON valido.')
      }
    }else{
      console.warn('Erro ao ler o arquivo.')
    }
  }
  xhr.open('get', '../dados/hemocentros.json')
  xhr.send()
}

function buscarHemoSelect(){ //Função de busca.
  xhr.onload = function(){
    if(this.status === 200){
      try{
        cardInformacoes.style.display = "block" //Muda o style para ser exibido
        info.innerText = "" // Limpa o campo para não duplicar as informações de buscas anteriores
        const obj = JSON.parse(this.responseText) //Converte em json valido
        for(i in obj.hemocentros){ //Pecorre o json
          if(obj.hemocentros[i].estado.toLowerCase() == document.getElementById("listaUF").value.toLowerCase()){
            info.innerHTML += '<a href="'+obj.hemocentros[i].link+'">'+obj.hemocentros[i].unidade.toUpperCase()+'</a><br><br>';
          }
          cardIndique.style.display = "block"
        }
      }catch (e){
        console.warn('O aquivo não é um JSON valido.')
      }
    }else{
      console.warn('Erro ao ler o arquivo.')
    }
  }
  xhr.open('get', '../dados/hemocentros.json')
  xhr.send()
}

listaSelect.addEventListener("change", function(){
  buscarHemoSelect()
})

function indHemocentro(){
  var nomeInd = document.getElementById("nome").value;
  var endInd = document.getElementById("endereco").value;
  var telInd = document.getElementById("telefone").value;
  
  if(nomeInd != "" && endInd != "" && telInd != ""){
    alert("Mensagem enviada!");
  }else{
    alert("Necessario preencher todos os dados.")
  }  
}