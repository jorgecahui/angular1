import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf } from '@angular/common';
import { evaluate } from 'mathjs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgClass,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  pantalla: string = '';

  bottons: string[] = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'AC'
  ];

  precionarBoton(valor: string) {
    if (valor === 'AC') {
      this.pantalla = '';
    } else if (valor === '=') {
      this.calcular();
    } else {
      this.pantalla += valor;
    }
  }

  calcular() {
    try {
      this.pantalla = String(evaluate(this.pantalla));
    } catch (e) {
      this.pantalla = 'Error';
    }
  }
}
