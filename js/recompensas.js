verificarStatus();

var resRecompensa = document.getElementById("resRecompensa")
var doacaoReg = localStorage.getItem("doacaoReg")
var premios = []

for(var i=1; i <= doacaoReg/2; i++){
    resRecompensa.innerHTML += '<li class="collection-item meuitem"><i><svg width="40" height="40" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m337.903 358.822 23.413-37.992 42.252-14.41 4.681-44.377 31.789-31.295-15.114-42.006 15.114-42.007-31.788-31.295-4.681-44.376-42.252-14.41-23.413-37.993-44.285 5.347-37.619-24.008-37.619 24.01-44.284-5.347-23.413 37.992-42.252 14.41-4.681 44.376-31.789 31.295 15.114 42.007-15.114 42.007 31.788 31.294 4.681 44.377 42.252 14.41 23.413 37.992 44.285-5.346 37.619 24.009 37.619-24.009zm-211.332-170.079c0-71.367 58.062-129.429 129.429-129.429s129.429 58.062 129.429 129.429-58.062 129.429-129.429 129.429-129.429-58.062-129.429-129.429z"/><path d="m256 89.333c-54.815 0-99.41 44.595-99.41 99.41s44.595 99.41 99.41 99.41 99.41-44.595 99.41-99.41-44.595-99.41-99.41-99.41z"/><path d="m211.299 384.568-52.68 6.36-27.833-45.167-9.462-3.226-40.813 127.566 73.475-4.041 57.485 45.94 33.828-105.732z"/><path d="m381.214 345.762-27.834 45.166-52.679-6.36-34 21.7 33.828 105.732 57.485-45.94 73.475 4.041-40.813-127.566z"/></svg></i><a href="#">Recompensa de Exemplo</a></li>'
}