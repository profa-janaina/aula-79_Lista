function lista(){
    document.getElementById("img1").style.display = "inline-block";
    document.getElementById("btnLista").style.display = "none";
}

function esconder(){
    document.getElementById("img1").style.display = "none";
    document.getElementById("btnLista").style.display = "inline-block";
}

// Parte a ser criada pelo aluno
var nomePokemon = [];

function enviar(){
    var pokemon1 = document.getElementById("nome1").value;
    var pokemon1 = document.getElementById("nome1").value;
    var pokemon2 = document.getElementById("nome2").value;
    var pokemon3 = document.getElementById("nome3").value;
    var pokemon4 = document.getElementById("nome4").value;

    nomePokemon.push(pokemon1);
    nomePokemon.push(pokemon2);
    nomePokemon.push(pokemon3);
    nomePokemon.push(pokemon4);

    console.log(nomePokemon);

    document.getElementById("mostrarNome").innerHTML = nomePokemon;
    document.getElementById("btnEnviar").style.display = "none";
    document.getElementById("btnLista").style.display = "none";
    document.getElementById("btnOrganizar").style.display = "inline-block";

}

function organizar(){
    nomePokemon.sort();
    console.log(nomePokemon);
    document.getElementById("mostrarNome").innerHTML = nomePokemon;
}

