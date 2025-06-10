import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListardoctoresComponent } from "./componentes/listar-doctores/listar-doctores.component";

@Component({
  selector: 'app-root',
  imports: [ ListardoctoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tarea_Doctores';
}
