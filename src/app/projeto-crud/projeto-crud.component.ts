import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projeto-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './projeto-crud.component.html',
  styleUrl: './projeto-crud.component.css'
})
export class ProjetoCrudComponent {

    //Variável para trabalhar com avisibilidade dos botões
    btnCadastrar:boolean = true;

    //Objeto do tipo FormGroup
    pessoa = new FormGroup({
        nome: new FormControl(''),
        idade: new FormControl(''),
        cidade: new FormControl('')
    })
}
