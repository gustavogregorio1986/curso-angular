import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  imports: [],
  templateUrl: './data-bindings.component.html',
  styleUrl: './data-bindings.component.css'
})
export class DataBindingsComponent {

   imagem:string = 'dia.jpg';

   alterarImagem(){
    this.imagem = this.imagem == 'dia.jpg' ? 'noite.jpg' : 'dia.jpg';
   }
}
