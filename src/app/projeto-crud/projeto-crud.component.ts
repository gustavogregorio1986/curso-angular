import { Component } from '@angular/core';

@Component({
  selector: 'app-projeto-crud',
  imports: [],
  templateUrl: './projeto-crud.component.html',
  styleUrl: './projeto-crud.component.css'
})
export class ProjetoCrudComponent {

    //Variável para trabalhar com avisibilidade dos botões
    btnCadastrar:boolean = true;
}
