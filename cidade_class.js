class Cidade{
    constructor(nome, estado, numPopulacao, numHomens, numMulheres){
        this.nome = nome;
        this.estado = estado;
        this.numPopulacao = numPopulacao;
        this.numHomens = numHomens;
        this.numMulheres = numMulheres;
    }

    percentualHomens(){
        let percentual = 0.0
        percentual = this.numHomens / this.numPopulacao;
        return percentual

    }
    percentualMulheres(){
        let percentual = 0.0
        percentual = this.numMulheres / this.numPopulacao;
        return percentual
        
    }
}

module.exports = Cidade;