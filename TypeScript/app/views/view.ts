export abstract class View<T>{
    protected elemento: HTMLElement;
    private escapar:boolean;

    constructor(selector: string, escapar:boolean = true) {
        const elemento = document.querySelector(selector);
        if (elemento){
            this.elemento = document.querySelector(selector) as HTMLElement;
        }else{
            throw Error("Selector não existe no DOM.")
        }
        
        this.escapar = escapar;
    }

    public update(model: T): void {
        let template = this.template(model);
        template = (this.escapar)?template.replace(/<script>[\s\S]*?<\/script>/,""):template;
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;

}