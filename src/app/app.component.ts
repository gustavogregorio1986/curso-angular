import { Component } from '@angular/core';
import { PrimeiroComponenteComponent } from "./primeiro-componente/primeiro-componente.component";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
