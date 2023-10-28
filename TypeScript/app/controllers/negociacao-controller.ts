import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes:Negociacoes =  new Negociacoes();
    private negociacoesView:NegociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView:MensagemView = new MensagemView("#mensagemView");

    constructor(){
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade")  as HTMLInputElement;
        this.inputValor = document.querySelector("#valor")  as HTMLInputElement;
        
    }
    
    public adiciona():void {
        const negociacao:Negociacao = this.criaNegociacao();
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update("Apenas negociação em dias úteis");
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormularaio();
    }

    private ehDiaUtil(data:Date):boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private criaNegociacao():Negociacao{
        return Negociacao.criarNegociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value);
    }

    private limparFormularaio():void{
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

    private atualizaView():void {
        this.negociacoesView.update(this.negociacoes);  
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}