import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

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
        nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
        idade: new FormControl('', [Validators.required, Validators.min(0), Validators.max(120)]),
        cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    //Vetor para armazenar pessoas
    vetor:Pessoa[] = [];

     //Inidice da pessoa selecionada
     indicePessoaSelecionada:number = -1;


     //Método para efetuar o cadastro
     cadastrar():void{
        this.vetor.push(this.pessoa.value as Pessoa);
        this.pessoa.reset();
     }

     //Método para selecionar uma pessoa especifica
     selecionar(indice:number):void{
         this.indicePessoaSelecionada = indice;

         this.pessoa.get('nome')?.setValue(this.vetor[indice].nome || '');
         this.pessoa.get('idade')?.setValue(this.vetor[indice].idade?.toString() || '');
         this.pessoa.get('cidade')?.setValue(this.vetor[indice].cidade || '');

         this.btnCadastrar = false;
     
     }

     cancelar():void{
        this.pessoa.reset();
        this.indicePessoaSelecionada = -1;

        this.btnCadastrar = true;

     }
}
