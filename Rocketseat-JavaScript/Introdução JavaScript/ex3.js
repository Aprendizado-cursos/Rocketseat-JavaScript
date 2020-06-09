function temHabilidade(skills) {
    var resultado;
    skills.forEach(i => {
        if(i == "Javascript"){
            resultado = true;
        }          
    });
    return resultado;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));