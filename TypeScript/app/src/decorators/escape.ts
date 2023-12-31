export function escape(){
    return function(
        target: any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args:Array<any>){
            let retorno = metodoOriginal.apply(this,args);
           // console.log(`@escape em ação na classe ${this.constructor.name}`)
            if(typeof(retorno)=="string"){
                retorno = retorno
                .replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return retorno;
        }
        return descriptor;
    }
}