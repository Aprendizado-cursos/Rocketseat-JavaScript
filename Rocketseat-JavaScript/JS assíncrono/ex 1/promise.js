function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if(idade > 18){
            setTimeout(function(){resolve()}, 2000);
        }
        else{
            setTimeout(function(){reject()}, 2000);
        }   
    })
}

checaIdade(16)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });