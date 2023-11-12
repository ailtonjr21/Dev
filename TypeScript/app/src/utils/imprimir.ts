import { Imprimivel } from "../interfaces/imprimivel.js";


export function imprimir(...args:Array<Imprimivel>){
    for(let imp of args){
        console.log(imp.toString())
    }
}