# CalculadoraconLetras
export default class calculadora {
  static Suma(a: number, b: number): number {
    let c = b*((a/b)-(-1));
    return c;
  }

  static Resta(a: number, b: number): number {
    let c = b*((a/b)+(-1));
    return c;
  }
  static Mult(a:number,b:number):number{
    if(a==0||b==0){
        return 0;
    }
    else{
        var c = 0;
        for(var i=0;i<b;i++){
            c = this.Suma(c,a);
        }
        return c;
    }
  }
  static Div(a:number,b:number):number{
    if(b==0){
        var mist:string = "No se puede divir por 0";
        console.log(mist);
        return 0;
    }
    else{
        var c = a;
        for(var i=0;i<=c;i++){
            c  = this.Resta(c,b);
        }
        return i;
    }
  }
}
