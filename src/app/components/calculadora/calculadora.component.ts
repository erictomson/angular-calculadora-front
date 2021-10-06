import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  calcular() {
    console.log("Vou calcular... guente aí!");
  }

  private a: number = 0;
  private b: number = 0;
  private o: number = 0;
  
  public get operandoA(): number {
    return this.a;
  }
  public set operandoA(value: number) {
    this.a = value;
  }

  public get operandoB(): number {
    return this.b;
  }
  public set operandoB(value: number) {
    this.b = value;
  }

  public get operador(): number {
    return this.o;
  }
  public set operador(value: number) {
    this.o = value;
  }

  ngOnInit(): void {
  }


}
