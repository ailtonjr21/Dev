export class View {
    constructor(selector, escapar = true) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = document.querySelector(selector);
        }
        else {
            throw Error("Selector não existe no DOM.");
        }
        this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        template = (this.escapar) ? template.replace(/<script>[\s\S]*?<\/script>/, "") : template;
        this.elemento.innerHTML = template;
    }
}
