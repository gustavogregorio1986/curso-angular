import { Component } from '@angular/core';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { DataBindingsComponent } from "./data-bindings/data-bindings.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { ControleFluxoComponent } from "./controle-fluxo/controle-fluxo.component";
import { DiretivaStyleComponent } from "./diretiva-style/diretiva-style.component";
import { DiretivaClassComponent } from "./diretiva-class/diretiva-class.component";
import { DiretivaCustomizadaComponent } from "./diretiva-customizada/diretiva-customizada/diretiva-customizada.component";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponenteComponent, DataBindingsComponent, FormularioComponent, ControleFluxoComponent, DiretivaStyleComponent, DiretivaClassComponent, DiretivaCustomizadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
