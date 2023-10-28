import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
    criarLinhas(model) {
        return model.lista().map(neg => {
            return `
                <tr>
                    <td>${this.formatarData(neg.data)}</td>
                    <td>${neg.quantidade}</td>
                    <td>${neg.valor}</td>
                </tr>
            `;
        }).join("");
    }
    formatarData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
