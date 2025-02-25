const aluno = {
    "nome": "Gabriel",
    "idade": 18,
    "curso": "ADS",
    "matricula":"2024",

    print : function(){
        return `Nome:${this.nome}, Idade:${this.idade}, Curso:${this.cusro}, Matricula: ${this.matricula}`
    }
}
console.log(aluno.print());