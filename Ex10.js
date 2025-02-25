let alunosMaior = () =>{
    return alunos.filter(aluno => aluno.idade > 18)
}

const alunos = [
    {nome: "Ana", idade: 17, curso: "ADS",matricula: "2023"},
    {nome: "Pedro", idade: 22, curso: "ADS", matricula:"2022"},
    {nome: "Mateus", idade: 20, curso: "GTI", matricula:"2023"},
    {nome: "Gabriel", idade: 17, curso: "ADS", matricula:"2024"}
]
const maioresDeIdade = alunosMaior(alunos);
console.log(maioresDeIdade);