import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-style',
  imports: [CommonModule],
  templateUrl: './diretiva-style.component.html',
  styleUrl: './diretiva-style.component.css'
})
export class DiretivaStyleComponent {
   corFomnte: string = 'yellow';
   corFundo: string = 'green';

   estiloTexto  = {
       'color': this.corFomnte, 
       'backgroundColor': this.corFundo
    }

   alterarEstilos(): void {
      this.corFomnte = this.corFomnte === 'yellow' ? 'blue' : 'yellow';
      this.corFundo = this.corFundo === 'green' ? 'red' : 'green';

      this.estiloTexto = {
         'color': this.corFomnte, 
         'backgroundColor': this.corFundo
      }
   }
}
