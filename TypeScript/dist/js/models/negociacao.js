export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criarNegociacao(data, quantidade, valor) {
        const expReg = /-/g;
        return new Negociacao(new Date(data.replace(expReg, ",")), parseInt(quantidade), parseFloat(valor));
    }
}
