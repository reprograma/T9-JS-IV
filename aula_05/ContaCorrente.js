// ao inserir o export as propriedades da class pode ser utilizada em outros arquivos. 

export class ContaCorrente {
  constructor(agencia) {
    this.agencia = agencia;
    this.saldo = 0;
  }

  depositar(valor) {
    return this.saldo += valor;
  }
  sacar(valor) {
    this.saldo -= valor;
    return valor;
  }

}