import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes:Negociacao[] = [];
    //Negociacao[] == Array<Negociacao>

    public adiciona(negociacao:Negociacao):void{
        this.negociacoes.push(negociacao);
    }


    public lista():readonly Negociacao[]{
        //ReadonlyArray<Negociacao> == readonly Negociacoes[]
        return this.negociacoes;
    }
}