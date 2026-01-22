import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-fluxo',
  imports: [],
  templateUrl: './controle-fluxo.component.html',
  styleUrl: './controle-fluxo.component.css'
})
export class ControleFluxoComponent {
  media: number = 8;
  linguagem: string = 'HTML'; // valor inicial

  nomes:string[] = ['Alice', 'Bianca', 'Ricardo', 'Roberto' ];
}

