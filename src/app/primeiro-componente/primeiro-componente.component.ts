import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {
   nome:string = 'Ralf';
   media:number = 8;
   pessoa = {
    nome: 'Ralf',
    idade: 35
  };

   mensgaem(): string {
    return 'Hello World!';
   }
}
