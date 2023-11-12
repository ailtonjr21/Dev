import { Comparavel } from "./comparavel.js";
import { Imprimivel } from "./imprimivel.js";

export interface Modelo<T> extends Comparavel<T>,Imprimivel{

}