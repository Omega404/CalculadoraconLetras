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
  static convertidor(num:String):number{
        let v1 = 0;
        let v2 = 0;
        let op = 0;
        for(var i=0;i<num.split(' ').length;i++){  
          switch(num.split(' ')[i]){
              case 'uno':v1=(v1*10)+1;break;
              case 'dos':v1=(v1*10)+2;break;
              case 'tres':v1=(v1*10)+3;break;
              case 'cuatro':v1=(v1*10)+4;break;
              case 'cinco':v1=(v1*10)+5;break;
              case 'seis':v1=(v1*10)+6;break;
              case 'siete':v1=(v1*10)+7;break;
              case 'ocho':v1=(v1*10)+8;break;
              case 'nueve':v1=(v1*10)+9;break;
              case 'cero':v1=(v1*10);break;
              case 'suma':
              case 'mas':
              case 'sumar':
                  v2 = v1;op=1;v1=0;break;
              case 'menos':
              case 'resta':
                  v2 = v1;op=2;v1=0;break;
              case 'por':
              case 'multiplicar':
              case 'mult':
                v2 = v1;op=3;v1=0;break;
              case 'div':
              case 'dividir':
              case 'division':
                  v2 = v1;op=4;v1=0;break;
              default:
                console.log('dato invalido ingresado por favor revisar'); break;
      }
    }
         switch(op){
            case 1: return this.Suma(v2,v1);break;
            case 2: return this.Resta(v2,v1);break;
            case 3: return this.Mult(v2,v1);break;
            case 4: return this.Div(v2,v1);break;
            default: return v1;
    }
  }
}
