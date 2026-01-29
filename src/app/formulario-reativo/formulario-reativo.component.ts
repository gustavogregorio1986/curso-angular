import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.component.html',
  styleUrl: './formulario-reativo.component.css'
})
export class FormularioReativoComponent {

    pessoa = new FormGroup({
         nome: new FormControl('', [Validators.required, Validators.maxLength(3)]),
         idade: new FormControl('', [Validators.required, Validators.max(120)])
    });
}
