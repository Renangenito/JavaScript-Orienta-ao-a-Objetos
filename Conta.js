export class Conta {

    constructor(saldo, cliente, agencia) {

         if(this.constructor == Conta){
            throw new error("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata!");
        }
        this._saldo = saldo;
        this._cliente = cliente;
        this.agencia = agencia;
    }

    get saldo() {
        return this._saldo;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente() {
        return this._cliente;
    }


    
    //Metodo abstrato
    sacar(valor) {
        
       throw new Error("O método sacar da conta é abstrato"); 
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}