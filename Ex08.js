let produto = {
    nome: "Refrigerante",
    preco: 4.50,
    quantidade: 50, 

    calcularTotal : function() {
        return this.preco * this.quantidade;
    }
}
console.log(`O valor total do produto é R$${produto.calcularTotal()},00`);
