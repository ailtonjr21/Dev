import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{ 

    protected template(model: Negociacoes):string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.criarLinhas(model)}
                </tbody>
            </table>`;
    }

    private criarLinhas(model: Negociacoes):string {
        return model.lista().map(neg=>{
            return `
                <tr>
                    <td>${this.formatarData(neg.data)}</td>
                    <td>${neg.quantidade}</td>
                    <td>${neg.valor}</td>
                </tr>
            `
        }).join("")
    }

    private formatarData(data: Date):string {
        return new Intl.DateTimeFormat().format(data);
    }
}