import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-class',
  imports: [CommonModule],
  templateUrl: './diretiva-class.component.html',
  styleUrl: './diretiva-class.component.css'
})
export class DiretivaClassComponent {
    alunos: string[] = ['aprovado', 'aprovado', 'reprovado', 'aprovado'];
}
