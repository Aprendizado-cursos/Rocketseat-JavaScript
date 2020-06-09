function experiencia(anos) {
    if(anos >= 0 && anos < 2){
        return "Iniciante";
    }
    else if(anos >= 1 && anos < 4){
        return "Intermediário";
    }
    else if (anos >= 3 && anos < 7) {
        return "Avançado";
    }
    else if (anos >= 7 ) {
        return "Jedi Master";
    }
}

var idade = 7;

console.log(experiencia(idade));