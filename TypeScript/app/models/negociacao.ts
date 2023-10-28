export class Negociacao{

    private constructor( 
        private _data:Date, //==private _data:Date,
        public readonly quantidade:number, //==private _quantidade:number,
        public readonly valor:number) //==private _valor:number)
    { }

    public get data():Date{
        return new Date(this._data.getTime());
    }

    public get volume():number{
        return this.quantidade *this.valor;
    }

    public static criarNegociacao(data:string,quantidade:string,valor:string):Negociacao{
        const expReg:RegExp = /-/g;
        return new Negociacao(
            new Date(data.replace(expReg,",")),
            parseInt(quantidade),
            parseFloat(valor)
        );
    }
}