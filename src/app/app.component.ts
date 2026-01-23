import { Component } from '@angular/core';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { DataBindingsComponent } from "./data-bindings/data-bindings.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { ControleFluxoComponent } from "./controle-fluxo/controle-fluxo.component";
import { DiretivaStyleComponent } from "./diretiva-style/diretiva-style.component";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponenteComponent, DataBindingsComponent, FormularioComponent, ControleFluxoComponent, DiretivaStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
