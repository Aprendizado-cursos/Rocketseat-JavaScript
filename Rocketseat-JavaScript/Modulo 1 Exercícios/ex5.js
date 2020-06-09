var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function percorreArray(usuarios){
    usuarios.forEach(i => {
        console.log("O " + i.nome + " possui as habilidades: " + i.habilidades.join());
    });
}

console.log(percorreArray(usuarios));