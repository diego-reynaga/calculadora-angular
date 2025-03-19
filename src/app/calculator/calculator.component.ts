import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  resultado:string = '';
  escribir(event: Event): void {
    let elementoButton = event.target as HTMLInputElement;
    this.resultado += elementoButton.value;
  }
  resuOperacion(event: Event): void{
    let cadena = event.target as HTMLInputElement;
    if(cadena.value.includes('!')){
      //falta verificar si un numero es decimal o negativo
      cadena.value = cadena.value.slice(0,-1);
      let num = parseInt(cadena.value);
      if (isNaN(num) || num<0) {
        this.resultado = 'syntax error'
        return
      }
      let fact = 1;
      for(let i=1; i<=num; i++){
        fact *= i;
      }
      this.resultado = fact.toString();
    }else{
      cadena.value = cadena.value.replace('x','*');
      if(cadena.value === ''){
        this.resultado = 'error';
        return
      }
      this.resultado = eval(cadena.value);
    }
  }
  borrar(){
    this.resultado = '';
  }
  borrarUno(){
    this.resultado = this.resultado.slice(0,-1);
  }
  holaMundo = () => {
    this.resultado = 'ELLA NO TE AMA'
  }
}
