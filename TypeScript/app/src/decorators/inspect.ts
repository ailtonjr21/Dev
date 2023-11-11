export function inspect(){
    return function(
        target: any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args:Array<any>){
            console.log(`--- Método ${propertyKey}`);
            console.log(`--- Propriedades ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this,args);            
            console.log(`--- Retorno ${JSON.stringify(retorno)}`);
            return retorno;
        }
        return descriptor;
    }
}

/*
export function inspect(){
    return function(
        target: any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args:Array<any>){
            const retorno = metodoOriginal.apply(this,args);
            
            return retorno;
        }
        return descriptor;
    }
}
*/