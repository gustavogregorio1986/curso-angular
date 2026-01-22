import { Component } from '@angular/core';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";
import { DataBindingsComponent } from "./data-bindings/data-bindings.component";
import { FormularioComponent } from "./formulario/formulario.component";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponenteComponent, DataBindingsComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
