import { Component } from '@angular/core';
import { CalculatorComponent } from "./calculator/calculator.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'CALCULADORA';
}
